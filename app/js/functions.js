/* 
 ! Tiles functions:

const iconDisable = document.getElementsByClassName("icon-disable");

iconDisable[0].addEventListener("click", iconActive0, false);
iconDisable[1].addEventListener("click", iconActive1, false);
iconDisable[2].addEventListener("click", iconActive2, false);
iconDisable[3].addEventListener("click", iconActive3, false);

console.log(iconDisable[0]);
function iconActive0() {
  iconDisable[0].classList.remove("icon-disable");
  iconDisable[0].classList.toggle("icon-active");
}

function iconActive1() {
  iconDisable[1].classList.toggle("icon-actived");
}
function iconActive2() {
  iconDisable[2].classList.toggle("icon-actived");
}
function iconActive3() {
  iconDisable[3].classList.toggle("icon-actived");
}

/*
  ! Adding Tiles function (remove disable):

const iconActivated = document.getElementsByClassName("icon-active");
const firstInputDisable = document.querySelectorAll("input[disabled]");
const iconPlus = document.getElementsByClassName("fa-plus-circle");

iconActivated[0].addEventListener("click", removeDisable, false);
iconActivated[0].addEventListener("click", removeIcon, false);
iconActivated[0].addEventListener("click", nextIcon, false);

function removeDisable() {
  firstInputDisable[0].removeAttribute("disabled");
}
function removeIcon() {
  iconActivated[0].remove();
}
function nextIcon() {
  iconPlus[0].classList.remove("icon-disable");
  iconPlus[0].classList.add("icon-active");
}

*/
