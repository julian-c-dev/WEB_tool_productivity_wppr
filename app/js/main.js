// This code stinks, I know, it was the first approach (I am learning), It needs to become DRY.

/* 
  & Selection background
*/

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

// & Preview function:

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

/* Adding Tiles */
const getMain = document.getElementById("main");
const mainContainer = document.createElement("div");
const firstTile = document.createElement("div");
const secondTile = document.createElement("div");
const thirdTile = document.createElement("div");
const fourthTile = document.createElement("div");
let title1 = "this is a test";

getMain.prepend(mainContainer);
mainContainer.classList.add("tilesContainer");

// adding tiles to container DOM
mainContainer.append(firstTile);
firstTile.classList.add("tile");
firstTile.innerText = title1;
mainContainer.append(secondTile);
secondTile.classList.add("tile");
secondTile.innerText = "Title 2";
mainContainer.append(thirdTile);
thirdTile.classList.add("tile");
thirdTile.innerText = "Title 3";
mainContainer.append(fourthTile);
fourthTile.classList.add("tile");
fourthTile.innerText = "Title 4";

const iconDisable = document.getElementsByClassName("icon-disable");

iconDisable[0].addEventListener("click", addTile1, false);

function addTile1(title1) {}
