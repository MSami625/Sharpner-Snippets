
//form submit functionality
function handleFormSubmit(event) {
  event.preventDefault();

  const userDetails = {
    uname: event.target.uname.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
    carno: event.target.carno.value,
  };
  axios
    .post(
      "https://crudcrud.com/api/d54c8112cf794904b597f59f13218373/UserData",
      userDetails
    )
    .then((response) => displayUserOnScreen(response.data))
    .catch((error) => console.log(error));

  // Clearing the input fields
  document.getElementById("uname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("carno").value = "";
}



//filter functionality

document.getElementById("filter").addEventListener("change", (event) => {
    const filterValue = event.target.value;
    axios
      .get("https://crudcrud.com/api/d54c8112cf794904b597f59f13218373/UserData")
      .then((res) => {
        let filteredData;
        if (filterValue.toLowerCase() === "all") {
          filteredData = res.data;
        } else {
      
          filteredData = res.data.filter(user => user.carno.toLowerCase() === filterValue.toLowerCase());
        }

        document.getElementById("user-list").innerHTML = "";
        displayUserOnScreen(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
});




window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/d54c8112cf794904b597f59f13218373/UserData")
    .then((res) => {
      displayUserOnScreen(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
});


//display user on screen
function displayUserOnScreen(userDetails) {
  if (!Array.isArray(userDetails)) {
    userDetails = [userDetails];
  }
  userDetails.map((userDetails) => {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.uname}   ${userDetails.email}   ${userDetails.phone} ${userDetails.carno} `
      )
    );

    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);

    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);

    deleteBtn.addEventListener("click", function (event) {
      axios
        .delete(
          `https://crudcrud.com/api/d54c8112cf794904b597f59f13218373/UserData/${userDetails._id}`
        )
        .then((res) => {
          console.log(res);
          userItem.remove();
        })
        .catch((err) => {
          console.log(err);
        });
    });

    editBtn.addEventListener("click", function (event) {
      //for edit function we need to add seperate button for edit to function properly with crud crud.
      document.getElementById("uname").value = userDetails.uname;
      document.getElementById("email").value = userDetails.email;
      document.getElementById("phone").value = userDetails.phone;
      document.getElementById("carno").value = userDetails.carno;
      userItem.remove();

      axios
        .put(
          `https://crudcrud.com/api/d54c8112cf794904b597f59f13218373/UserData/${userDetails._id}`,
          {
            uname: userDetails.uname,
            email: userDetails.email,
            phone: userDetails.phone,
            carno: userDetails.carno,
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    document.getElementById("user-list").appendChild(userItem);
  });
}
