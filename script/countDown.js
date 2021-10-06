const countDown = '2021-12-15';

function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
  
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
};

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const timeinterval = setInterval(() => {
    const time = getTimeRemaining(endtime);
    clock.innerHTML = `
    <div class="timeContainer">
      <img class="gCap" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-graduation-hat-event-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"/>
      <div class=" time timeDays"><h2>Days: ${time.days}</h2></div>
      <div class="time timeHrs"><h2> Hrs: ${time.hours}</h2></div>
      <div class="time timeMin"><h2> Min: ${time.minutes}</h2></div>
      <div class="time timeSec"><h2> Sec: ${time.seconds}</h2></div>
    </div>
    `
    if (time.total <= 0) {
      clearInterval(timeinterval);
    }
  },1000);
}
initializeClock('clock', countDown);

