const clockTitle = document.querySelector(".js-clock");

/* :${} */

function time(){
    const today = new Date();
    const christmas = new Date("Dec 25 2022 00:00:00");
    const leftTime = christmas - today;     // ms 단위로 계산됨.
    const dates = parseInt(leftTime / (1000*60*60*24));
    const hours = String(24-today.getHours()).padStart(2,"0");
    const minutes = String(60-today.getMinutes()).padStart(2,"0");
    const seconds = String(60-today.getSeconds()).padStart(2,"0");
    clockTitle.innerText = `${dates}d ${hours}h ${minutes}m ${seconds}s`;
};
setInterval(time, 1000);


