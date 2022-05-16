const daysEl    = document.getElementById("days");
const hoursEl   = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYears ="22 Apr 2022 ";

function countdown(){
    const newYearDate =new Date(newYears);
    const currentDate = new Date();

    const Tseconds = (newYearDate -  currentDate) / 1000;
    const days = Math.floor(Tseconds/3600/24);
    const hours = Math.floor(Tseconds/3600)% 24;
    const minutes = Math.floor(Tseconds/60)% 60;
    const seconds = Math.floor(Tseconds)%60;

   

   daysEl.innerHTML = days;
   hoursEl.innerHTML = hours;
   minutesEl.innerHTML = minutes;
   secondsEl.innerHTML = seconds;

    
}

countdown();

setInterval(countdown, 1000);
