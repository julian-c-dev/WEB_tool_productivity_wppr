// This code stinks, I know, it was the first approach, It needs better way to do it.

const iconPlus = document.getElementsByClassName("fa-plus-circle")[0];
const tileAdd = document.getElementsByClassName("hide")[0];
const inputs = document.getElementsByTagName("input")[1];
const previewChange = document.getElementsByTagName("img")[3];
console.log(previewChange);

iconPlus.addEventListener("click", addingTiles);

function addingTiles() {
  iconPlus.classList.toggle("grey-hidden");
  tileAdd.classList.remove("hide");
  inputs.removeAttribute("disabled");
  previewChange.src = "/Assets/images/tile2.png";
}

const iconPlus2 = document.getElementsByClassName("fa-plus-circle")[1];
const tileAdd2 = document.getElementsByClassName("hide")[1];
const inputs2 = document.getElementsByTagName("input")[2];

iconPlus2.addEventListener("click", addingTiles2);

function addingTiles2() {
  iconPlus2.classList.toggle("grey-hidden");
  tileAdd2.classList.remove("hide");
  inputs2.removeAttribute("disabled");
  previewChange.src = "/Assets/images/tile3.png";
}

const iconPlus3 = document.getElementsByClassName("fa-plus-circle")[2];
const tileAdd3 = document.getElementsByClassName("hide")[2];
const inputs3 = document.getElementsByTagName("input")[3];

iconPlus3.addEventListener("click", addingTiles3);

function addingTiles3() {
  iconPlus3.classList.toggle("grey-hidden");
  tileAdd3.classList.remove("hide");
  inputs3.removeAttribute("disabled");
  previewChange.src = "/Assets/images/tile4.png";
}

const iconPlus4 = document.getElementsByClassName("fa-plus-circle")[3];
const tileAdd4 = document.getElementsByClassName("hide")[3];
const inputs4 = document.getElementsByTagName("input")[4];

iconPlus4.addEventListener("click", addingTiles4);

function addingTiles4() {
  iconPlus4.classList.toggle("grey-hidden");
  tileAdd4.classList.remove("hide");
  inputs4.removeAttribute("disabled");
  previewChange.src = "/Assets/images/tile5.png";
}

const iconPlus5 = document.getElementsByClassName("fa-plus-circle")[4];
const tileAdd5 = document.getElementsByClassName("hide")[4];
const inputs5 = document.getElementsByTagName("input")[5];

iconPlus5.addEventListener("click", addingTiles5);

function addingTiles5() {
  iconPlus5.classList.toggle("grey-hidden");
  inputs5.removeAttribute("disabled");
  previewChange.src = "/Assets/images/tile6.png";
}
