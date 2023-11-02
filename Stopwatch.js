timeElement = document.querySelector('.watch .time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let seconds = 0;
let interval = null;

startButton.addEventListener('click',start);
stopButton.addEventListener('click',stop);
resetButton.addEventListener('click',reset);

function stopWatchTimer(){
    seconds++;

    let hrs= Math.floor(seconds/3000);
    let mins=Math.floor((seconds - (hrs*3600))/60);
    let secs=seconds%60;

    if(secs <10) secs = '0' + secs;
    if(mins <10) mins = '0' + mins;
    if(hrs <10) hrs = '0' + hrs;

    timeElement.innerText = `${hrs}:${mins}:${secs}`;
}

function start () {
    if(interval){
        return
    }

    interval =  setInterval(stopWatchTimer, 1000);
}

function stop () {
    clearInterval(interval);
    interval=null;
}

function reset(){
    stop();
    seconds =0;
    timeElement.innerText='00:00:00';
}