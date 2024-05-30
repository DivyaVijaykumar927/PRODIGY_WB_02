let startTime, updatedTime, difference, tInterval, running = false;

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(getShowTime, 10);
        running = true;
    }
}

function stopStopwatch() {
    if (running) {
        clearInterval(tInterval);
        difference = new Date().getTime() - startTime;
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    document.getElementById('hours').innerHTML = '00';
    document.getElementById('minutes').innerHTML = '00';
    document.getElementById('seconds').innerHTML = '00';
    document.getElementById('milliseconds').innerHTML = '00';
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let milliseconds = Math.floor((difference % 1000) / 10);
    let seconds = Math.floor((difference / 1000) % 60);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    hours = (hours < 10) ? "0" + hours : hours;

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('milliseconds').innerHTML = milliseconds;
}

document.getElementById('start').addEventListener("click", startStopwatch);
document.getElementById('stop').addEventListener("click", stopStopwatch);
document.getElementById('reset').addEventListener("click", resetStopwatch);
