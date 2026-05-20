const campusData = {

"23A91A0501":{

name:"Exam Hall",

room:"205",

block:"A Block",

floor:"2nd Floor",

path:"Main Gate, Left Corridor, Room 205"

},

"CSE LAB 1":{

name:"Computer Lab",

room:"Lab 101",

block:"B Block",

floor:"1st Floor",

path:"Main Gate, Right Corridor, Lab 101"

},

"DBMS CLASS":{

name:"Classroom",

room:"204",

block:"A Block",

floor:"2nd Floor",

path:"Main Gate, Left Corridor, Room 204"

},

"JAVA LAB":{

name:"Programming Lab",

room:"Lab 203",

block:"C Block",

floor:"2nd Floor",

path:"Main Gate, Straight Corridor, Lab 203"

},

"LIBRARY":{

name:"Central Library",

room:"Library Wing",

block:"D Block",

floor:"Ground Floor",

path:"Main Gate, Left Side Building"

},

"PLACEMENT CELL":{

name:"Placement Office",

room:"301",

block:"Admin Block",

floor:"3rd Floor",

path:"Main Gate, Admin Block, Room 301"

},

"SEMINAR HALL":{

name:"Seminar Hall",

room:"Hall 1",

block:"Main Building",

floor:"Ground Floor",

path:"Main Gate, Main Building"

},

"PHYSICS LAB":{

name:"Laboratory",

room:"Lab 105",

block:"Science Block",

floor:"1st Floor",

path:"Main Gate, Science Block"

}

};

function findHall(){

let hallTicket =

document
.querySelector(
"input"
)
.value
.toUpperCase()
.replace(/\s+/g,'');

if(hallTicket==""){

document
.getElementById(
"result"
)
.innerHTML=

`

<p>

Please Enter Location

</p>

`;

return;

}

let student =

campusData[
hallTicket
];

if(!student){

for(let key in campusData){

if(

key.replace(/\s+/g,'')

===

hallTicket

){

student=

campusData[key];

break;

}

}

}

if(student){

document
.getElementById(
"result"
)
.innerHTML =

`

<h3>

${student.name}

</h3>

<p>

Location:
${student.room}

</p>

<p>

Block:
${student.block}

</p>

<p>

Floor:
${student.floor}

</p>

<p>

Path:
${student.path}

</p>

`;

}

else{

document
.getElementById(
"result"
)
.innerHTML=

`

<p>

Location Not Found

</p>

`;

}



}
document
.querySelector(
"input"
)
.addEventListener(

"keypress",

function(event){

if(event.key==="Enter"){

findHall();

}

}

);