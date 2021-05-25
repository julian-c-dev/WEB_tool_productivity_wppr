// This code stinks, I know, it was the first approach (I am learning), It needs to become DRY.

// Changing BODY BACKGROUND with selections.

const selectionColor1 = document.querySelector(".select1");
const selectionColor2 = document.querySelector(".select2");
const selectionColor3 = document.querySelector(".select3");
const selectionColor4 = document.querySelector(".select4");
const selectionColor5 = document.querySelector(".select5");
const selectionColor6 = document.querySelector(".select6");

selectionColor1.onclick = () => {
  document.body.style.background =
    "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)";
  changeColor();
};

selectionColor2.onclick = () => {
  document.body.style.background =
    "linear-gradient(to top, #30cfd0 0%, #330867 100%)";
};

selectionColor3.onclick = () => {
  document.body.style.background =
    "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)";
  changeColor();
};

selectionColor4.onclick = () => {
  document.body.style.background =
    "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)";
  changeColor();
};

selectionColor5.onclick = () => {
  document.body.style.background = `linear-gradient(to top,
        #dbdcd7 0%,
        #dddcd7 24%,
        #e2c9cc 30%,
        #e7627d 46%,
        #b8235a 59%,
        #801357 71%,
        #3d1635 84%,
        #1c1a27 100%
      )`;
};

selectionColor6.onclick = () => {
  document.body.style.background =
    "linear-gradient(to right, #434343 0%, black 100%)";
};

// Swap footer depends of Background Selection

const footer = document.querySelector(".footer-light");

// Adding TILES

const iconPlus = document.getElementsByClassName("fa-plus-circle")[0];
const tileAdd = document.getElementsByClassName("hide")[0];
const inputs = document.getElementsByTagName("input")[1];

iconPlus.addEventListener("click", addingTiles);

function addingTiles() {
  iconPlus.classList.toggle("grey-hidden");
  tileAdd.classList.remove("hide");
  inputs.removeAttribute("disabled");
}

const iconPlus2 = document.getElementsByClassName("fa-plus-circle")[1];
const tileAdd2 = document.getElementsByClassName("hide")[1];
const inputs2 = document.getElementsByTagName("input")[2];

iconPlus2.addEventListener("click", addingTiles2);

function addingTiles2() {
  iconPlus2.classList.toggle("grey-hidden");
  tileAdd2.classList.remove("hide");
  inputs2.removeAttribute("disabled");
}

const iconPlus3 = document.getElementsByClassName("fa-plus-circle")[2];
const tileAdd3 = document.getElementsByClassName("hide")[2];
const inputs3 = document.getElementsByTagName("input")[3];

iconPlus3.addEventListener("click", addingTiles3);

function addingTiles3() {
  iconPlus3.classList.toggle("grey-hidden");
  tileAdd3.classList.remove("hide");
  inputs3.removeAttribute("disabled");
}

const iconPlus4 = document.getElementsByClassName("fa-plus-circle")[3];
const tileAdd4 = document.getElementsByClassName("hide")[3];
const inputs4 = document.getElementsByTagName("input")[4];

iconPlus4.addEventListener("click", addingTiles4);

function addingTiles4() {
  iconPlus4.classList.toggle("grey-hidden");
  tileAdd4.classList.remove("hide");
  inputs4.removeAttribute("disabled");
}

const iconPlus5 = document.getElementsByClassName("fa-plus-circle")[4];
const tileAdd5 = document.getElementsByClassName("hide")[4];
const inputs5 = document.getElementsByTagName("input")[5];

iconPlus5.addEventListener("click", addingTiles5);

function addingTiles5() {
  iconPlus5.classList.toggle("grey-hidden");
  inputs5.removeAttribute("disabled");
}
