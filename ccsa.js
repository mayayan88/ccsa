/* log in form*/

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

function myFunction() {
  let text = "Press OK to continue or Cancel to return.";
  if (confirm(text) == true) {
    window.location.href = "main.html";
  } 
  document.getElementById("demo").innerHTML = text;
}


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "spss" && password === "25773836") {
        myFunction()
    } else {
        alert("Incorrect username or password")
    }
})


/* pop up window */

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
