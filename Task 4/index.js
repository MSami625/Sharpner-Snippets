// Write your code below:
const header=document.getElementById("header");
const subheading=document.createElement("h3");
const subtext=document.createTextNode("Buy high quality organic fruits online");

subheading.appendChild(subtext);
header.appendChild(subheading);



subheading.style.fontStyle="italic";




const  divs=document.getElementsByTagName("div");
const secdiv=divs[1];

const para=document.createElement("p");
const paratext=document.createTextNode("Total fruits: 4");

para.appendChild(paratext);

const fruits=document.querySelector(".fruits");
secdiv.insertBefore(para,fruits);

para.id="fruits-total";