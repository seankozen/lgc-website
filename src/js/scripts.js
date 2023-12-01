const menuDiv = document.querySelector(".sidebar");
const checkBox = document.getElementById("menu-checkbox");

/***************************************/
/*****   Hamburger display or hide *****/
/***************************************/

const translateMenu = () => {
  checkBox.checked = false;
};

menuDiv.addEventListener("click", translateMenu);

/***************************************/
/*****       Form Validation       *****/
/***************************************/
const senderName = document.getElementById("name");
const nameValidation = document.getElementById("name_validation");
const email = document.getElementById("email");
const emailValidation = document.getElementById("email_validation");
const message = document.getElementById("message");
const messageValidation = document.getElementById("message_validation");

console.log(senderName);
console.log(nameValidation);
console.log(email);
console.log(emailValidation);
console.log(message);
console.log(messageValidation);
