let timer;
        let startTime;
        let elapsedTime = 0;
        let running = false;

        const display = document.getElementById('display');
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        const resetBtn = document.getElementById('resetBtn');

        startBtn.addEventListener('click', () => {
            if (!running) {
                running = true;
                startTime = Date.now() - elapsedTime;
                timer = setInterval(updateTime, 1000 / 60);
            }
        });

        stopBtn.addEventListener('click', () => {
            if (running) {
                running = false;
                clearInterval(timer);
                elapsedTime = Date.now() - startTime;
            }
        });

        resetBtn.addEventListener('click', () => {
            running = false;
            clearInterval(timer);
            elapsedTime = 0;
            display.textContent = '00:00:00';
        });

        function updateTime() {
            elapsedTime = Date.now() - startTime;
            const time = new Date(elapsedTime);
            const minutes = String(time.getUTCMinutes()).padStart(2, '0');
            const seconds = String(time.getUTCSeconds()).padStart(2, '0');
            const milliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0');
            display.textContent = `${minutes}:${seconds}:${milliseconds}`;
        }