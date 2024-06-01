function handleFormSubmit(event) {
    event.preventDefault();
    let path = event.target;
    let obj = {
      amount: `${path.amount.value}`,
      description: `${path.description.value}`,
      category: path.category.value
    };
  
  localStorage.setItem(`${path.category.value}`, JSON.stringify(obj));
    // console.log(localStorage.getItem(`${path.email.value}`))

   
  
  //ui
  
  const form=document.querySelector("form");
  
    
  const li=document.createElement("li");
  const litxt=document.createTextNode(`${path.amount.value} - ${path.description.value} - ${path.category.value}`);
  li.className="list-group-item";
  li.appendChild(litxt);
  
  const delbtn=document.createElement("button");
  delbtn.className="del-btn";
  delbtn.textContent = "Delete";
  
  
  delbtn.addEventListener("click",function(){
      li.remove();
      localStorage.removeItem(obj.category);
    })
  
   li.appendChild(delbtn);
  
  
    const editbtn=document.createElement("button");
    editbtn.className="edit-btn";
    editbtn.textContent="Edit";
  
    editbtn.addEventListener("click",function(){



      const ninput=document.getElementById("amount").value=obj.amount;
      const einput=document.getElementById("description").value=obj.description;
      const pinput=document.getElementById("category").value=obj.category;
     

    // Remove user details from local storage
    localStorage.removeItem(obj.category);
    // Remove list item from the user list
    li.remove();  


    })

    li.appendChild(editbtn);
    
  
  

    let ule = document.querySelector("ul");
    if (!ule) {
      ule = document.createElement("ul");
      form.appendChild(ule);
    }
    ule.appendChild(li);
  
  
  
  
    
  }
  
  
  
  
  module.exports=handleFormSubmit;
