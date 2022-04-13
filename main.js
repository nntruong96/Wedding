var countdown = document.querySelector('.countdown');
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  var newChild;

  function updateClock() {
    var t = getTimeRemaining(endtime);
    var daysArr = String(t.days).split('');
    daysSpan.innerHTML = '';
    for (var i = 0; i < daysArr.length; i++) {
      newChild = document.createElement('span');
      newChild.innerHTML = daysArr[i];
      daysSpan.appendChild(newChild);
    }
    var hoursArr = String(('0' + t.hours).slice(-2)).split('');
    hoursSpan.innerHTML = '';
    for (var i = 0; i < hoursArr.length; i++) {
      newChild = document.createElement('span');
      newChild.innerHTML = hoursArr[i];
      hoursSpan.appendChild(newChild);
    }
    var minuteArr = String(('0' + t.minutes).slice(-2)).split('');
    minutesSpan.innerHTML = '';
    for (var i = 0; i < minuteArr.length; i++) {
      newChild = document.createElement('span');
      newChild.innerHTML = minuteArr[i];
      minutesSpan.appendChild(newChild);
    }
    var secondArr = String(('0' + t.seconds).slice(-2)).split('');
    secondsSpan.innerHTML = '';
    for (var i = 0; i < secondArr.length; i++) {
      newChild = document.createElement('span');
      newChild.innerHTML = secondArr[i];
      secondsSpan.appendChild(newChild);
    }
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
// set your wedding date here
var deadline = 'May 15 2022 11:00:00 GMT+0300';
if (countdown) {
  initializeClock('timer', deadline);
}

/*-- cat run  */
