// This code stinks, I know, it was the first approach (I am learning), It needs to become DRY.

// 1. Selection background.

const selectionColor1 = document.querySelector(".select1");
const selectionColor2 = document.querySelector(".select2");
const selectionColor3 = document.querySelector(".select3");
const selectionColor4 = document.querySelector(".select4");
const selectionColor5 = document.querySelector(".select5");
const selectionColor6 = document.querySelector(".select6");

selectionColor1.onclick = () => {
  document.body.style.background =
    "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)";
};

selectionColor2.onclick = () => {
  document.body.style.background =
    "linear-gradient(to top, #30cfd0 0%, #330867 100%)";
};

selectionColor3.onclick = () => {
  document.body.style.background =
    "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)";
};

selectionColor4.onclick = () => {
  document.body.style.background =
    "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)";
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

// 2. Adding Tiles function (remove disable):

/*
 ! when click on an activated iconPlus  => remove disable attr of the input field.
*/
let iconActivated = document.getElementsByClassName("icon-active");
const firstInputDisable = document.querySelectorAll("input[disabled]");
const iconPlus = document.getElementsByClassName("fa-plus-circle");

iconActivated[0].addEventListener("click", removeDisable, true);
iconActivated[0].addEventListener("click", removeIcon, true);
iconActivated[0].addEventListener("click", nextIcon, true);

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

/*



// Generate function:
// Swap footer depends of Background Selection
*/

/* 
 & Preview function:
*/

const caughtTool = document.getElementsByClassName("tool");
const caughtIcon = document.getElementsByClassName("wrapper");

function previewIn() {
  caughtTool[0].classList.toggle("hidden");
  caughtIcon[0].classList.remove("hidden");
}

caughtIcon[0].addEventListener("click", previewOut, false);

function previewOut() {
  caughtIcon[0].classList.toggle("hidden");
  caughtTool[0].classList.remove("hidden");
}
