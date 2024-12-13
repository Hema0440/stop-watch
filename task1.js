let startTime = 0;
let elapsedTime = 0;
let timerInterval;
const display = document.getElementById('display');

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 1000);
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    display.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(unit) {
    return unit.toString().padStart(2, '0');
}

document.getElementById('startBtn').addEventListener('click', startTimer);

document.getElementById('pauseBtn').addEventListener('click', function() {
    clearInterval(timerInterval);
});

document.getElementById('resetBtn').addEventListener('click', function() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.innerText = "00:00:00";
    document.getElementById('laps').innerHTML = "";
});

document.getElementById('lapBtn').addEventListener('click', function() {
    const lapTime = display.innerText;
    const lapItem = document.createElement('li');
    lapItem.innerText = lapTime;
    document.getElementById('laps').appendChild(lapItem);
});
