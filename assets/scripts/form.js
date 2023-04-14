const username = document.getElementById('username');
const password = document.getElementById('password');
const login_btn = document.getElementById("login_btn");
const login_form = document.getElementById("login-form");

// form event listener
// login_form.addEventListener("submit", (event) =>{
//     event.preventDefault();
//     console.log(event);
//     console.log(username.value, password.value);
// });

// // button click function 
// login_btn.addEventListener('dblclick',()=>{
//     console.log(username.value, password.value);
//     username.value = "";
//     password.value = "";
// });



// // mouse over function 
// login_btn.addEventListener("mouseover", () => {
//   console.log(username.value, password.value);
//   username.value = "";
//   password.value = "";
// });


const output = document.getElementById('output');
// output the user name and password in the html document
login_form.addEventListener("submit", (event)=>{
    event.preventDefault();
    output.innerText= `username : ${username.value}, password : ${password.value}`;
});