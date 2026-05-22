class BootLoader {
    constructor() {
        this.terminal = null;
    this.bootMessages = [
        'Powering on...',
        'Kernel loading...',
        'Initializing formula processor...',
        'Loading mathematical formulas...',
        'Loading physical formulas...',
        'Mounting virtual filesystem...',
        'Starting command shell...',
        'Initializing terminal service...',
        'Starting MathPhys WebOS...'
    ];
    }

    start() {
        KERNEL.init();

        // Show splash screen
        let splash = document.getElementById('splash');
        let statusText = document.querySelector('.status-text');
        let loaderFill = document.querySelector('.loader-fill');

        // Animate boot messages
        let msgIndex = 0;
        let bootInterval = setInterval(() => {
            if (msgIndex < this.bootMessages.length) {
                statusText.textContent = this.bootMessages[msgIndex];
                msgIndex++;
            }
        }, 300);

        // Wait for boot to complete
        setTimeout(() => {
            clearInterval(bootInterval);

            // Hide splash and show terminal
            splash.style.opacity = '0';
            setTimeout(() => {
                splash.style.display = 'none';
                document.getElementById('terminal').style.display = 'flex';

                // Boot kernel
                KERNEL.boot();

                // Initialize terminal
                this.terminal = new Terminal();
                window.terminal = this.terminal;
                this.terminal.init();

                // Print boot messages to terminal
                let bootMsgs = KERNEL.getStats();
                this.terminal.printSystem('--- MathPhys WebOS Boot ---');
                this.terminal.printSystem('Kernel: ' + KERNEL.version + ' | Formulas: ' + bootMsgs.mathFormulas + ' math, ' + bootMsgs.physicsFormulas + ' physics');
                this.terminal.printSystem('Commands: ' + bootMsgs.commands + ' | Filesystem, Shell, Terminal ready');
                this.terminal.printSystem('');

                // Display MOTD
                try {
                    let motd = FS.readFile('/etc/motd');
                    for (let line of motd.split('\n')) {
                        if (line.trim()) this.terminal.printSystem(line);
                    }
                } catch(e) {}

                this.terminal.bootComplete();

            }, 500);
        }, 4000);
    }
}

window.bootLoader = new BootLoader();
window.addEventListener('DOMContentLoaded', () => {
    window.bootLoader.start();
});
