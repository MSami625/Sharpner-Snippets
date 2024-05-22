// Write the code as shown in the video below:
document.querySelector("#main-heading").style.textAlign="center";

const fruits=document.querySelector(".fruits");

fruits.style.backgroundColor="grey";
fruits.style.margin="30px"
fruits.style.padding="30px"
fruits.style.width="50%";
fruits.style.borderRadius="5px"
fruits.style.listStyle="none"

const baskethead=document.querySelector("h2")
  baskethead.style.marginLeft="30px"


const fruitslist=document.querySelectorAll(".fruit");

for(let i=0;i<fruitslist.length;i++){
  fruitslist[i].style.margin="10px"
  fruitslist[i].style.padding="10px"
  fruitslist[i].style.borderRadius="10px"
  fruitslist[i].style.backgroundColor="white";
  
}






// Write answer to the questions asked below:
baskethead.style.color="brown";




const evenFruitslist=document.querySelectorAll(".fruit:nth-child(even)");
                                               
for(let i=0;i<evenFruitslist.length;i++){
 evenFruitslist[i].style.color="white";
 evenFruitslist[i].style.backgroundColor="brown";
  
}
