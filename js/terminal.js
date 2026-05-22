class Terminal {
    constructor() {
        this.output = document.getElementById('output');
        this.input = document.getElementById('input');
        this.prompt = document.getElementById('prompt');
        this.shell = new Shell();
        this.commandHistory = [];
        this.isBooted = false;
        this.statusInterval = null;
        this.clockInterval = null;
        this.moreMode = false;
        this.moreLines = [];
        this.moreIndex = 0;
    }

    init() {
        this.input.addEventListener('keydown', (e) => this.handleKeydown(e));
        this.input.addEventListener('input', () => this.handleInput());
        document.addEventListener('click', () => this.focusInput());

        this.input.addEventListener('focus', () => {
            this.inputLine = document.getElementById('input-line');
            if (this.inputLine) this.inputLine.style.borderTopColor = '#444';
        });
        this.input.addEventListener('blur', () => {
            this.inputLine = document.getElementById('input-line');
            if (this.inputLine) this.inputLine.style.borderTopColor = '#1a1a1a';
        });

        this.statusDate = document.getElementById('status-date');
        this.statusFormulas = document.getElementById('status-mem');
        this.statusCwd = document.getElementById('status-cwd');
        this.statusBar = document.getElementById('term-statusbar');

        this.updateStatus();
        this.statusInterval = setInterval(() => this.updateStatus(), 10000);
        this.clockInterval = setInterval(() => {
            let now = new Date();
            this.statusDate.textContent = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        }, 1000);

        document.getElementById('btn-minimize').addEventListener('click', () => {
            let body = document.getElementById('term-body');
            body.style.display = body.style.display === 'none' ? 'flex' : 'none';
        });
        document.getElementById('btn-maximize').addEventListener('click', () => {
            let body = document.getElementById('term-body');
            body.style.display = 'flex';
        });
        document.getElementById('btn-close').addEventListener('click', () => {
            this.printSystem('Close terminal? Refresh page to restart.');
        });

        this.input.addEventListener('paste', (e) => {
            e.preventDefault();
            let text = (e.clipboardData || window.clipboardData).getData('text');
            this.input.value += text;
        });
    }

    focusInput() {
        setTimeout(() => this.input && this.input.focus(), 0);
    }

    updateStatus() {
        let mc = MATH ? MATH.getCount() : 0;
        let pc = PHYSICS ? PHYSICS.getCount() : 0;
        this.statusFormulas.textContent = 'MATH: ' + mc + ' | PHYSICS: ' + pc;
        this.statusCwd.textContent = 'CWD: ' + (FS ? FS.currentPath : '/');
    }

    bootComplete() {
        this.isBooted = true;
        this.updatePrompt();
        this.focusInput();
        this.printSystem('System ready. Type "help" for available commands.');
        this.printSystem('');

        let mc = MATH ? MATH.getCount() : 0;
        let pc = PHYSICS ? PHYSICS.getCount() : 0;
        let cc = Object.keys(COMMANDS).length;
        this.printDim('MathPhys WebOS - ' + mc + ' math formulas | ' + pc + ' physics formulas | ' + cc + ' commands');
        this.printSystem('');
    }

    print(text, type, extra) {
        let line = document.createElement('div');
        line.className = 'output-line ' + (type || 'info');
        if (extra && extra.color) line.style.color = extra.color;
        if (extra && extra.style) line.style.cssText = extra.style;
        line.innerHTML = text.replace(/\n/g, '<br>');
        this.output.appendChild(line);
        this.scrollToBottom();
        return line;
    }

    printInfo(text) { return this.print(text, 'info'); }
    printError(text) { return this.print(text, 'error'); }
    printWarning(text) { return this.print(text, 'warning'); }
    printSystem(text) { return this.print(text, 'system'); }
    printFormula(text) { return this.print(text, 'formula'); }
    printHeading(text) { return this.print(text, 'heading'); }
    printHighlight(text) { return this.print(text, 'highlight'); }
    printDim(text) { return this.print(text, 'dim'); }

    scrollToBottom() {
        this.output.scrollTop = this.output.scrollHeight;
    }

    handleInput() {}

    enterMoreMode() {
        this.moreMode = true;
        this.input.disabled = true;
        this.input.style.display = 'none';
        this.prompt.textContent = '-- More -- (press any key) ';
    }

    exitMoreMode() {
        this.moreMode = false;
        this.input.disabled = false;
        this.input.style.display = '';
        this.updatePrompt();
        this.focusInput();
        this.moreLines = [];
        this.moreIndex = 0;
    }

    handleKeydown(e) {
        if (this.moreMode) {
            this.exitMoreMode();
            return;
        }

        if (e.key === 'Enter') {
            e.preventDefault();
            let input = this.input.value;
            this.input.value = '';
            if (input.trim()) {
                this.commandHistory.push(input);
            }
            this.executeCommand(input);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            let prev = this.shell.getHistoryPrevious();
            if (prev !== null) {
                this.input.value = prev;
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            let next = this.shell.getHistoryNext();
            this.input.value = next;
        } else if (e.key === 'Tab') {
            e.preventDefault();
            let result = this.shell.tabComplete(this.input.value);
            if (result === false) {
                if (window._tabMatches && window._tabMatches.length > 0) {
                    this.printInfo(window._tabMatches.join('  '));
                    window._tabMatches = null;
                }
            } else if (result) {
                this.input.value = result;
            }
        } else if (e.ctrlKey && e.key === 'l') {
            e.preventDefault();
            this.clearScreen();
        } else if (e.ctrlKey && e.key === 'c') {
            if (this.moreMode) {
                this.exitMoreMode();
                return;
            }
            e.preventDefault();
            this.printSystem('^C');
            this.input.value = '';
        } else if (e.ctrlKey && e.key === 'd') {
            if (this.input.value === '') {
                this.executeCommand('exit');
            }
        } else if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            this.input.value = '';
        } else if (e.ctrlKey && e.key === 'w') {
            e.preventDefault();
            let parts = this.input.value.split(/\s+/);
            parts.pop();
            this.input.value = parts.join(' ') + (parts.length > 0 ? ' ' : '');
        }
    }

    executeCommand(input) {
        let promptLine = document.createElement('div');
        promptLine.className = 'output-line prompt-line';
        promptLine.innerHTML = '<span style="color:#888">' + this.shell.getPrompt() + '</span>' + this.escapeHtml(input);
        this.output.appendChild(promptLine);

        if (!input.trim()) {
            this.scrollToBottom();
            this.focusInput();
            return;
        }

        let result = this.shell.execute(input);

        if (result && result.type === 'clear') {
            this.clearScreen();
            this.focusInput();
            return;
        }

        if (result && result.type === 'shutdown') {
            this.printWarning('System halted.');
            this.input.disabled = true;
            this.input.style.display = 'none';
            return;
        }

        if (result && result.type === 'reboot') {
            this.printWarning('Rebooting...');
            setTimeout(() => {
                this.clearScreen();
                window.location.reload();
            }, 1000);
            return;
        }

        if (result && result.type === 'more') {
            this.moreLines = result.lines || [];
            this.moreIndex = 0;
            this.showMorePage();
            return;
        }

        if (result) {
            for (let item of Array.isArray(result) ? result : [result]) {
                if (item && item.type === 'dir_change') {}
            }
        }

        if (Array.isArray(result)) {
            for (let line of result) {
                if (line && line.text !== undefined) {
                    if (line.type === 'heading') this.printHeading(line.text);
                    else if (line.type === 'error') this.printError(line.text);
                    else if (line.type === 'warning') this.printWarning(line.text);
                    else if (line.type === 'formula') this.printFormula(line.text);
                    else if (line.type === 'highlight') this.printHighlight(line.text);
                    else if (line.type === 'dim') this.printDim(line.text);
                    else if (line.type === 'subheading') this.print(line.text, 'subheading');
                    else if (line.type === 'system') this.printSystem(line.text);
                    else if (line.type === 'story') this.print(line.text, 'story');
                    else this.printInfo(line.text);
                }
            }
        }

        this.updatePrompt();
        this.updateStatus();
        this.scrollToBottom();
        this.focusInput();
    }

    showMorePage() {
        let pageSize = Math.floor((this.output.clientHeight || 400) / 21) - 2;
        if (pageSize < 3) pageSize = 20;
        let end = Math.min(this.moreIndex + pageSize, this.moreLines.length);
        for (let i = this.moreIndex; i < end; i++) {
            let line = this.moreLines[i];
            if (line && line.text !== undefined) {
                if (line.type === 'heading') this.printHeading(line.text);
                else if (line.type === 'error') this.printError(line.text);
                else if (line.type === 'warning') this.printWarning(line.text);
                else if (line.type === 'formula') this.printFormula(line.text);
                else if (line.type === 'highlight') this.printHighlight(line.text);
                else if (line.type === 'dim') this.printDim(line.text);
                else if (line.type === 'subheading') this.print(line.text, 'subheading');
                else if (line.type === 'system') this.printSystem(line.text);
                else if (line.type === 'story') this.print(line.text, 'story');
                else this.printInfo(line.text);
            }
        }
        this.moreIndex = end;
        if (this.moreIndex < this.moreLines.length) {
            this.enterMoreMode();
        } else {
            this.exitMoreMode();
        }
    }

    clearScreen() {
        this.output.innerHTML = '';
    }

    updatePrompt() {
        this.prompt.textContent = this.shell.getPrompt();
    }

    escapeHtml(text) {
        let div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

window.Terminal = Terminal;
