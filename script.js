function updateTime(){

let now=new Date();

document.getElementById("time").innerHTML=
now.toLocaleString();

}

setInterval(updateTime,1000);

updateTime();

function openDoor(){

document.getElementById("doorStatus").innerHTML="Opened";

alert("Medicine Box Opened");

}

function closeDoor(){

document.getElementById("doorStatus").innerHTML="Closed";

alert("Medicine Box Closed");

}

function stopAlarm(){

document.getElementById("alarmStatus").innerHTML="OFF";

alert("Alarm Stopped");

}
