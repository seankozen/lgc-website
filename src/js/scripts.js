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
