class FileSystem {
    constructor() {
        this.root = {
            name: '/',
            type: 'dir',
            children: {},
            permissions: 'drwxr-xr-x',
            owner: 'root',
            group: 'root',
            created: Date.now(),
            modified: Date.now()
        };
        this.currentPath = '/';
        this.currentDir = this.root;
        this.mounted = false;
        this.init();
    }

    init() {
        this.mkdir('/bin', true);
        this.mkdir('/etc', true);
        this.mkdir('/home', true);
        this.mkdir('/home/root', true);
        this.mkdir('/home/guest', true);
        this.mkdir('/usr', true);
        this.mkdir('/usr/share', true);
        this.mkdir('/usr/local', true);
        this.mkdir('/var', true);
        this.mkdir('/var/log', true);
        this.mkdir('/var/tmp', true);
        this.mkdir('/tmp', true);
        this.mkdir('/dev', true);
        this.mkdir('/proc', true);
        this.mkdir('/sys', true);
        this.mkdir('/opt', true);
        this.mkdir('/mnt', true);
        this.mkdir('/media', true);
        this.mkdir('/lib', true);
        this.mkdir('/sbin', true);
        this.mkdir('/boot', true);
        this.mkdir('/usr/include', true);
        this.mkdir('/usr/lib', true);
        this.mkdir('/usr/share/doc', true);
        this.mkdir('/usr/share/man', true);
        this.mkdir('/usr/share/formulas', true);
        this.mkdir('/etc/init.d', true);

        this.writeFile('/etc/hostname', 'mathphys-os\n');
        this.writeFile('/etc/os-release', 'NAME="MathPhys WebOS"\nVERSION="4.2.0"\nID=mathphys\nPRETTY_NAME="MathPhys WebOS 4.2.0 (Formula Edition)"\n');
        this.writeFile('/etc/motd', 'Welcome to MathPhys WebOS v4.2.0\nType "help" for available commands\nType "formulas" to browse formula categories\nType "search [query]" to search formulas\n');
        this.writeFile('/etc/passwd', 'root:x:0:0:root:/home/root:/bin/shell\nguest:x:1000:1000:guest:/home/guest:/bin/shell\n');
        this.writeFile('/etc/group', 'root:x:0:root\nusers:x:100:guest\n');
        this.writeFile('/home/root/.bashrc', 'export PS1="\\u@\\h:\\w$ "\nalias ll="ls -la"\nalias la="ls -a"\n');
        this.writeFile('/home/root/.profile', 'PATH=/bin:/usr/bin:/usr/local/bin\n');

        if (typeof COMMANDS !== 'undefined') {
            let helpText = '';
            for (let cmd in COMMANDS) {
                helpText += cmd + ' - ' + COMMANDS[cmd].description + '\n';
            }
            this.writeFile('/usr/share/doc/commands.txt', helpText);
        }
        this.writeFile('/proc/version', 'MathPhys WebOS Kernel 4.2.0-mainline\n');
        this.writeFile('/proc/uptime', '0\n');
        this.writeFile('/proc/formula-count', '200000+\n');
    }

    normalizePath(path) {
        if (!path) return this.currentPath;
        if (path === '~') return '/home/root';
        if (path.startsWith('~/')) return '/home/root/' + path.slice(2);

        let parts;
        if (path.startsWith('/')) {
            parts = path.split('/').filter(p => p);
        } else {
            parts = this.currentPath.split('/').filter(p => p);
            let relParts = path.split('/').filter(p => p);
            parts = parts.concat(relParts);
        }

        let resolved = [];
        for (let part of parts) {
            if (part === '.' || part === '') continue;
            if (part === '..') { resolved.pop(); continue; }
            resolved.push(part);
        }
        return '/' + resolved.join('/');
    }

    resolveNode(path) {
        let normalized = this.normalizePath(path);
        if (normalized === '/') return { node: this.root, parent: null, name: '' };
        let parts = normalized.split('/').filter(p => p);
        let current = this.root;
        let parent = null;
        for (let i = 0; i < parts.length; i++) {
            parent = current;
            if (!current.children[parts[i]]) {
                return null;
            }
            current = current.children[parts[i]];
            if (i === parts.length - 1) {
                return { node: current, parent: parent, name: parts[i] };
            }
        }
        return null;
    }

    exists(path) {
        return this.resolveNode(path) !== null;
    }

    isDirectory(path) {
        let r = this.resolveNode(path);
        return r && r.node.type === 'dir';
    }

    isFile(path) {
        let r = this.resolveNode(path);
        return r && r.node.type === 'file';
    }

    mkdir(path, silent) {
        let normalized = this.normalizePath(path);
        if (this.exists(normalized)) {
            if (!silent) throw new Error('mkdir: cannot create directory "' + path + '": File exists');
            return;
        }
        let parentPath = normalized.substring(0, normalized.lastIndexOf('/'));
        let dirName = normalized.split('/').filter(p => p).pop();
        if (!parentPath) parentPath = '/';
        let parent = this.resolveNode(parentPath);
        if (!parent) {
            if (!silent) throw new Error('mkdir: cannot create directory "' + path + '": No such file or directory');
            return;
        }
        parent.node.children[dirName] = {
            name: dirName,
            type: 'dir',
            children: {},
            permissions: 'drwxr-xr-x',
            owner: 'root',
            group: 'root',
            created: Date.now(),
            modified: Date.now()
        };
    }

    writeFile(path, content) {
        let normalized = this.normalizePath(path);
        let parentPath = normalized.substring(0, normalized.lastIndexOf('/'));
        let fileName = normalized.split('/').filter(p => p).pop();
        if (!parentPath) parentPath = '/';
        let parent = this.resolveNode(parentPath);
        if (!parent) {
            let parts = normalized.split('/').filter(p => p);
            let current = this.root;
            for (let i = 0; i < parts.length - 1; i++) {
                if (!current.children[parts[i]]) {
                    current.children[parts[i]] = {
                        name: parts[i],
                        type: 'dir',
                        children: {},
                        permissions: 'drwxr-xr-x',
                        owner: 'root',
                        group: 'root',
                        created: Date.now(),
                        modified: Date.now()
                    };
                }
                current = current.children[parts[i]];
            }
            parent = { node: current, parent: null, name: parts[parts.length-1] };
        }

        let existing = parent.node.children[fileName];
        if (existing && existing.type === 'dir') {
            throw new Error('cannot write file: is a directory');
        }

        parent.node.children[fileName] = {
            name: fileName,
            type: 'file',
            content: content,
            permissions: '-rw-r--r--',
            owner: 'root',
            group: 'root',
            size: content.length,
            created: Date.now(),
            modified: Date.now()
        };
    }

    readFile(path) {
        let r = this.resolveNode(path);
        if (!r) throw new Error('cat: ' + path + ': No such file or directory');
        if (r.node.type === 'dir') throw new Error('cat: ' + path + ': Is a directory');
        return r.node.content;
    }

    rm(path) {
        let r = this.resolveNode(path);
        if (!r) throw new Error('rm: cannot remove "' + path + '": No such file or directory');
        if (r.parent) {
            delete r.parent.children[r.name];
        }
    }

    rmdir(path) {
        let r = this.resolveNode(path);
        if (!r) throw new Error('rmdir: cannot remove "' + path + '": No such file or directory');
        if (r.node.type !== 'dir') throw new Error('rmdir: "' + path + '": Not a directory');
        if (Object.keys(r.node.children).length > 0) throw new Error('rmdir: "' + path + '": Directory not empty');
        if (r.parent) delete r.parent.children[r.name];
    }

    ls(path) {
        let dir = path ? this.resolveNode(path) : { node: this.currentDir };
        if (!dir) throw new Error('ls: cannot access "' + path + '": No such file or directory');
        if (dir.node.type !== 'dir') return [dir.node];
        let items = [];
        for (let name in dir.node.children) {
            items.push(dir.node.children[name]);
        }
        items.sort((a, b) => a.name.localeCompare(b.name));
        return items;
    }

    cd(path) {
        let target = path || '/';
        let r = this.resolveNode(target);
        if (!r) throw new Error('cd: ' + target + ': No such file or directory');
        if (r.node.type !== 'dir') throw new Error('cd: ' + target + ': Not a directory');
        this.currentPath = this.normalizePath(target);
        this.currentDir = r.node;
        return this.currentPath;
    }

    find(dirPath, pattern) {
        let results = [];
        let dir = this.resolveNode(dirPath || '/');
        if (!dir) return results;
        this._findRecursive(dir.node, dirPath || '/', pattern, results);
        return results;
    }

    _findRecursive(node, path, pattern, results) {
        try {
            let regex = new RegExp(pattern, 'i');
            if (regex.test(node.name)) {
                results.push(path + (path === '/' ? '' : '/') + node.name);
            }
        } catch(e) {
            if (node.name.includes(pattern)) {
                results.push(path + (path === '/' ? '' : '/') + node.name);
            }
        }
        if (node.type === 'dir') {
            for (let name in node.children) {
                let child = node.children[name];
                let childPath = path + (path === '/' ? '' : '/') + name;
                this._findRecursive(child, childPath, pattern, results);
            }
        }
    }

    getTree(path, indent) {
        indent = indent || '';
        let result = '';
        let dir = path ? this.resolveNode(path) : { node: this.currentDir };
        if (!dir) return '';
        let items = this.ls(path);
        for (let item of items) {
            result += indent + (item.type === 'dir' ? '📁 ' : '📄 ') + item.name + '\n';
            if (item.type === 'dir') {
                let subPath = (path === '/' ? '/' : path + '/') + item.name;
                result += this.getTree(subPath, indent + '  ');
            }
        }
        return result;
    }

    df() {
        let total = 0;
        let used = 0;
        this._countSize(this.root, () => {});
        return { total: 1024000, used: 512000, available: 512000 };
    }

    _countSize(node) {
        if (node.type === 'file') return node.content ? node.content.length : 0;
        let size = 0;
        for (let name in node.children) {
            size += this._countSize(node.children[name]);
        }
        return size;
    }
}

window.FS = new FileSystem();
