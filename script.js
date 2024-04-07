const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minuteEl  = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");


const newYears = '06 May 2024'

function countdown(){
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSecond = (newYearDate-currentDate)/1000;

    const day = Math.floor(totalSecond/60/60/24);
    const hour = Math.floor(totalSecond/60/60)%24;
    const minute = Math.floor(totalSecond/60)%60;
    const second = Math.floor(totalSecond)%60;

    console.log(currentDate);

    dayEl.innerHTML = day;
    hourEl.innerHTML = fomatTime(hour);
    minuteEl.innerHTML = fomatTime(minute);
    secondEl.innerHTML = fomatTime(second);

}

function fomatTime(time){
    return time <10 ? `0${time}` : time;
}

countdown();
setInterval(countdown,1000);