const menuDiv = document.querySelector(".sidebar");
const checkBox = document.getElementById("menu-checkbox");

const translateMenu = () => {
  checkBox.checked = false;
};

menuDiv.addEventListener("click", translateMenu);
