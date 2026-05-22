class Shell {
    constructor() {
        this.history = [];
        this.historyIndex = -1;
        this.currentDir = '/';
        this.user = 'root';
        this.hostname = 'mathphys-os';
        this.running = true;
    }

    getPrompt() {
        return this.user + '@' + this.hostname + ':' + (FS.currentPath === '/home/root' ? '~' : FS.currentPath) + '$ ';
    }

    parseCommand(input) {
        let parts = [];
        let current = '';
        let inQuote = false;
        let quoteChar = null;
        for (let i = 0; i < input.length; i++) {
            let c = input[i];
            if (inQuote) {
                if (c === quoteChar) {
                    inQuote = false;
                    quoteChar = null;
                } else {
                    current += c;
                }
            } else if (c === '"' || c === "'") {
                inQuote = true;
                quoteChar = c;
            } else if (c === ' ') {
                if (current) {
                    parts.push(current);
                    current = '';
                }
            } else {
                current += c;
            }
        }
        if (current) parts.push(current);
        return parts;
    }

    execute(input) {
        input = input.trim();
        if (!input) return [];

        this.history.push(input);
        this.historyIndex = this.history.length;

        let parts = this.parseCommand(input);
        let cmd = parts[0].toLowerCase();
        let args = parts.slice(1);

        // Handle piped commands (simplified)
        let pipeIndex = args.indexOf('|');
        if (pipeIndex >= 0) {
            let cmd1Args = args.slice(0, pipeIndex);
            let cmd2 = args[pipeIndex + 1];
            let cmd2Args = args.slice(pipeIndex + 2);
            return this.executeSingle(cmd, cmd1Args);
        }

        // Handle redirections (simplified)
        let redirectIndex = args.indexOf('>');
        if (redirectIndex >= 0) {
            let fileArg = args[redirectIndex + 1];
            let cmdArgs = args.slice(0, redirectIndex);
            let output = this.executeSingle(cmd, cmdArgs);
            let textOutput = output.map(o => o.text || '').join('\n');
            try {
                FS.writeFile(fileArg, textOutput);
                return [{ type: 'info', text: 'Output written to ' + fileArg }];
            } catch(e) {
                return [{ type: 'error', text: e.message }];
            }
        }

        return this.executeSingle(cmd, args);
    }

    executeSingle(cmd, args) {
        if (COMMANDS[cmd]) {
            let result = COMMANDS[cmd].handler(args);
            if (result && result.type === 'clear') {
                return result;
            }
            if (result && result.type === 'shutdown') {
                this.running = false;
                return result;
            }
            if (result && result.type === 'reboot') {
                return result;
            }
            if (Array.isArray(result)) {
                // Check if any item signals a directory change
                for (let item of result) {
                    if (item && item.type === 'dir_change') {
                        this.currentDir = item.path;
                    }
                }
                return result;
            }
            return [{ type: 'info', text: String(result) }];
        }
        return [{ type: 'error', text: cmd + ': command not found. Type "help" for available commands.' }];
    }

    addHistory(input) {
        this.history.push(input);
        this.historyIndex = this.history.length;
    }

    getHistoryPrevious() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            return this.history[this.historyIndex];
        }
        return null;
    }

    getHistoryNext() {
        if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            return this.history[this.historyIndex];
        }
        this.historyIndex = this.history.length;
        return '';
    }

    tabComplete(input) {
        let parts = input.split(/\s+/);
        let last = parts[parts.length - 1];

        if (parts.length === 1 && !input.includes(' ')) {
            // Complete command names
            let matches = Object.keys(COMMANDS).filter(c => c.startsWith(last));
            if (matches.length === 1) {
                return matches[0] + ' ';
            }
            if (matches.length > 1) {
                // Find common prefix
                let prefix = matches[0];
                for (let m of matches) {
                    while (prefix.length > 0 && !m.startsWith(prefix)) {
                        prefix = prefix.slice(0, -1);
                    }
                }
                if (prefix.length > last.length) {
                    return prefix;
                }
                // Show matches by returning false - terminal will handle display
                window._tabMatches = matches;
                return false;
            }
            // Try file/directory completion
            return this._completeFilePath(last);
        }

        // Try file/directory completion for subsequent args
        if (last) {
            let result = this._completeFilePath(last);
            if (result) return input.slice(0, -last.length) + result;
        }
        return null;
    }

    _completeFilePath(path) {
        let normalized = FS.normalizePath(path);
        let parentPath;
        let prefix;

        if (path.endsWith('/')) {
            parentPath = normalized;
            prefix = '';
        } else {
            let idx = normalized.lastIndexOf('/');
            if (idx === 0) {
                parentPath = '/';
                prefix = normalized.slice(1);
            } else {
                parentPath = normalized.slice(0, idx);
                prefix = normalized.slice(idx + 1);
            }
        }

        try {
            let items = FS.ls(parentPath);
            let matches = items
                .filter(i => i.name.startsWith(prefix))
                .map(i => i.name + (i.type === 'dir' ? '/' : ''));

            if (matches.length === 1) {
                let basePath = path.substring(0, path.length - prefix.length);
                return basePath + matches[0];
            }
            if (matches.length > 1) {
                let common = matches[0];
                for (let m of matches) {
                    while (common.length > 0 && !m.startsWith(common)) {
                        common = common.slice(0, -1);
                    }
                }
                if (common.length > prefix.length) {
                    let basePath = path.substring(0, path.length - prefix.length);
                    return basePath + common;
                }
                window._tabMatches = matches;
                return false;
            }
        } catch(e) {}
        return null;
    }
}

window.Shell = Shell;
