// Declare the 'data' object
let data = {};
//First, let's target all the ID selectors from the HTML in JavaScript
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

//build a submit event listener for the form so that it can prevent the default behaviour of our App. 
//At the same time, we will create a function named formValidation
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
  
    formValidation();
  });
  


  //-------we're gonna make an if else statement inside our formValidation function---------------// 
  //-------This will help us prevent users from submitting blank input fields---------------------//

  let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log("failure");
    } else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
};
  //Whatever data we get from the input fields, we will store them in an object. Let's create an object named data. 
  //And, create a function named

  let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
  };

  //to create posts using JavaScript template literals at right side

  let createPost = () => {
    posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    input.value = "";
  };
  let deletePost = (e) => {
    e.parentElement.parentElement.remove();
  };
  let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };