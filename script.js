// Clock
function updateTime() {

let now = new Date();

document.getElementById("time").innerHTML =
now.toLocaleString();

}

setInterval(updateTime,1000);

updateTime();

// Load Medicines
window.onload = function(){

loadMedicine();

};

// Add Medicine
function addMedicine(){

let name=document.getElementById("medicineNameInput").value;

let time=document.getElementById("medicineTimeInput").value;

if(name=="" || time==""){

alert("Enter Medicine Name and Time");

return;

}

let medicines=
JSON.parse(localStorage.getItem("medicine")) || [];

medicines.push({

name:name,

time:time

});

localStorage.setItem("medicine",

JSON.stringify(medicines));

document.getElementById("medicineNameInput").value="";

document.getElementById("medicineTimeInput").value="";

loadMedicine();

}

// Display Medicines

function loadMedicine(){

let medicines=
JSON.parse(localStorage.getItem("medicine")) || [];

let table=document.querySelector("#medicineTable tbody");

table.innerHTML="";

medicines.forEach((item,index)=>{

table.innerHTML+=`

<tr>

<td>${item.name}</td>

<td>${item.time}</td>

<td>

<button class="deleteBtn"

onclick="deleteMedicine(${index})">

Delete

</button>

</td>

</tr>

`;

});

}

// Delete Medicine

function deleteMedicine(index){

let medicines=
JSON.parse(localStorage.getItem("medicine"));

medicines.splice(index,1);

localStorage.setItem("medicine",

JSON.stringify(medicines));

loadMedicine();

}

// Existing Buttons

function openDoor(){

document.getElementById("doorStatus").innerHTML="Opened";

}

function closeDoor(){

document.getElementById("doorStatus").innerHTML="Closed";

}

function stopAlarm(){

document.getElementById("alarmStatus").innerHTML="OFF";

}
