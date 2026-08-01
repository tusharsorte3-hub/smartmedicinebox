function updateClock(){

let now=new Date();

let time=now.toLocaleTimeString();

document.getElementById("clock").innerHTML=time;

}

setInterval(updateClock,1000);

updateClock();

document.getElementById("espStatus").innerHTML="Waiting...";

document.getElementById("doorStatus").innerHTML="Closed";

document.getElementById("rfidStatus").innerHTML="No Card";

document.getElementById("alarmStatus").innerHTML="OFF";
