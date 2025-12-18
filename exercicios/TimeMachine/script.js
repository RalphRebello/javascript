let setHour = null;
let setMin = null;
let img = window.document.getElementById("img");
let box = window.document.getElementById("box");

function getDate() {
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  hour = String(hour).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  return [hour, minutes, seconds];
}

function alarm(setHour, setMin) {
  var [hour, minutes, seconds] = getDate();
  var alarmSound = document.getElementById("alarm-sound");

  console.log(setHour, setMin);

  if (setHour == hour && setMin == minutes) {
    img.src = "/exercicios/TimeMachine/images/ALARM.png";
    document.body.style.background = "#ff004cff";
    box.style.background = "#a41f40ff";
    alarmSound.play();
  } else {
    alarmSound.pause();
    alarmSound.currentTime = 0;
  }
}

function setAlarm() {
  var alarmImg = window.document.getElementById("alarm-img");

  setHour = window.document.getElementById("txthour").value;
  setMin = window.document.getElementById("txtmin").value;

  if (setHour.trim() === "") {
    alarmImg.src = "/exercicios/TimeMachine/images/alarm_unset.png";
    console.log(`empty ${setHour}:${setMin}`);
  } else {
    alarmImg.src = "/exercicios/TimeMachine/images/alarm_set.png";
    console.log(`${setHour}:${setMin}`);
  }
}

function clock() {
  var msg = window.document.getElementById("msg");

  var [hour, minutes, seconds] = getDate();

  if (hour >= 0 && hour < 12) {
    msg.innerHTML = `Bom dia! ${hour}:${minutes}:${seconds}`;
    img.src = "/exercicios/TimeMachine/images/morning.png";
    document.body.style.background = "#e7ae78ff";
    box.style.background = "#ffdbb9ff";
  } else if (hour >= 12 && hour < 19) {
    msg.innerHTML = `Boa tarde! ${hour}:${minutes}:${seconds}`;
    img.src = "/exercicios/TimeMachine/images/afternoon.png";
    document.body.style.background = "#febd00ff";
    box.style.background = "#fddd7eff";
  } else {
    msg.innerHTML = `Boa noite! ${hour}:${minutes}:${seconds}`;
    img.src = "/exercicios/TimeMachine/images/night.png";
    document.body.style.background = "#00234dff";
    box.style.background = "#7d99bb57";
  }

  alarm(setHour, setMin);
}

function update() {
  clock();
  setInterval(clock, 1000);
}
