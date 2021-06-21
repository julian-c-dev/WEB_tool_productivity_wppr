// This code stinks, I know, it was the first approach (I am learning), It needs to become DRY.

//  & 1.Select your favorite background from the following options:

const selectionColor1 = document.querySelector(".select1");
const selectionColor2 = document.querySelector(".select2");
const selectionColor3 = document.querySelector(".select3");
const selectionColor4 = document.querySelector(".select4");
const selectionColor5 = document.querySelector(".select5");
const selectionColor6 = document.querySelector(".select6");

// ~ onclick Functions:

selectionColor1.onclick = () => {
  document.body.style.background =
    "linear-gradient(to top, #30cfd0 0%, #330867 100%)";
  document.body.style.backgroundSize = "100vw 130vh";
};

selectionColor2.onclick = () => {
  document.body.style.background =
    "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)";

  document.body.style.backgroundSize = "100vw 130vh";
};

selectionColor3.onclick = () => {
  document.body.style.background =
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  document.body.style.backgroundSize = "100vw 130vh";
};

selectionColor4.onclick = () => {
  document.body.style.background =
    "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)";
  document.body.style.backgroundSize = "100vw 130vh";
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
  document.body.style.backgroundSize = "100vw 130vh";
};

selectionColor6.onclick = () => {
  document.body.style.background =
    "linear-gradient(to right, #434343 0%, black 100%)";
  document.body.style.backgroundSize = "100vw 130vh";
};

// & 2 - How many tiles do you want to add to your Wallpaper?

// * images:
const caugthSelectTwo = document.querySelector(".selectTwo");
const caugthSelectFour = document.querySelector(".selectFour");

// * DOM elements:
const getMain = document.getElementById("main");
const mainContainer = document.createElement("div");
const domTwo1Tile = document.createElement("div");
const domTwo2Tile = document.createElement("div");
const domFour1Tile = document.createElement("div");
const domFour2Tile = document.createElement("div");
const domFour3Tile = document.createElement("div");
const domFour4Tile = document.createElement("div");

// * creating DOM layout
getMain.prepend(mainContainer);
mainContainer.classList.add("tilesContainer");

// * icons:
const getIcons = document.querySelectorAll(".fas");

// * input-groups * :
const getDisabled = document.querySelectorAll("[disabled]");
const inputGroup1 = document.getElementsByClassName("input1");
const inputGroup2 = document.getElementsByClassName("input2");
const inputGroup3 = document.getElementsByClassName("input3");
const inputGroup4 = document.getElementsByClassName("input4");
const inputGroup5 = document.getElementsByClassName("input5");
const inputGroup6 = document.getElementsByClassName("input6");
console.log(inputGroup1);

// ~ Functions:

function removeDisabled() {
  for (let input of getDisabled) {
    input.removeAttribute("disabled");
  }
}

function addIcon() {
  for (let icon of getIcons) {
    icon.classList.remove("icon-disable");
  }
}

function removeTextDomTwo() {
  domTwo1Tile.innerText = "";
  domTwo2Tile.innerText = "";
}

function removeTextDomFour() {
  domFour1Tile.innerText = "";
  domFour2Tile.innerText = "";
  domFour3Tile.innerText = "";
  domFour4Tile.innerText = "";
}

function appendTilesDomTwo() {
  mainContainer.append(domTwo1Tile);
  mainContainer.append(domTwo2Tile);
}
function appendTilesDomFour() {
  mainContainer.append(domFour1Tile);
  mainContainer.append(domFour2Tile);
  mainContainer.append(domFour3Tile);
  mainContainer.append(domFour4Tile);
}

function inputsToggleDomTwo() {
  inputGroup1[0].classList.remove("hide");
  inputGroup2[0].classList.remove("hide");
  inputGroup3[0].classList.add("hide");
  inputGroup4[0].classList.add("hide");
  inputGroup5[0].classList.add("hide");
  inputGroup6[0].classList.add("hide");
}

function inputsToggleDomFour() {
  inputGroup1[0].classList.toggle("hide");
  inputGroup2[0].classList.toggle("hide");
  inputGroup3[0].classList.toggle("hide");
  inputGroup4[0].classList.toggle("hide");
  inputGroup5[0].classList.toggle("hide");
  inputGroup6[0].classList.toggle("hide");
}

function tilesToggleDomTwo() {
  domFour1Tile.classList.toggle("tile-small");
  domFour2Tile.classList.toggle("tile-small");
  domFour3Tile.classList.toggle("tile-small");
  domFour4Tile.classList.toggle("tile-small");

  domTwo1Tile.classList.add("tile-big");
  domTwo2Tile.classList.add("tile-big");
}

function tilesToggleDomFour() {
  domTwo1Tile.classList.toggle("tile-big");
  domTwo2Tile.classList.toggle("tile-big");

  domFour1Tile.classList.add("tile-small");
  domFour2Tile.classList.add("tile-small");
  domFour3Tile.classList.add("tile-small");
  domFour4Tile.classList.add("tile-small");
}

// ~ onclick Functions:

caugthSelectTwo.onclick = () => {
  removeDisabled();
  addIcon();
  removeTextDomFour();
  appendTilesDomTwo();
  inputsToggleDomTwo();
  tilesToggleDomTwo();
};

caugthSelectFour.onclick = () => {
  removeDisabled();
  addIcon();
  removeTextDomTwo();
  appendTilesDomFour();
  inputsToggleDomFour();
  tilesToggleDomFour();
};

// & 3 - Type the titles for your tiles and add them by clicking on the plus icon:

const icon1Tile = document.getElementById("iconTile1");
const icon2Tile = document.getElementById("iconTile2");
const icon3Tile = document.getElementById("iconTile3");
const icon4Tile = document.getElementById("iconTile4");
const icon5Tile = document.getElementById("iconTile5");
const icon6Tile = document.getElementById("iconTile6");

function turnGreen(icon) {
  icon.classList.add("green");
}

icon1Tile.onclick = () => {
  const input1Tile = document.querySelector("#tile1");
  valueInput1Tile = input1Tile.value;
  domTwo1Tile.innerText = valueInput1Tile;
  turnGreen(icon1Tile);
};

icon2Tile.onclick = () => {
  const input2Tile = document.querySelector("#tile2");
  valueInput2Tile = input2Tile.value;
  domTwo2Tile.innerText = valueInput2Tile;
  turnGreen(icon2Tile);
};

icon3Tile.onclick = () => {
  const input3Tile = document.querySelector("#tile3");
  valueInput3Tile = input3Tile.value;
  domFour1Tile.innerText = valueInput3Tile;
  turnGreen(icon3Tile);
};

icon4Tile.onclick = () => {
  const input4Tile = document.querySelector("#tile4");
  valueInput4Tile = input4Tile.value;
  domFour2Tile.innerText = valueInput4Tile;
  turnGreen(icon4Tile);
};

icon5Tile.onclick = () => {
  const input5Tile = document.querySelector("#tile5");
  valueInput5Tile = input5Tile.value;
  domFour3Tile.innerText = valueInput5Tile;
  turnGreen(icon5Tile);
};

icon6Tile.onclick = () => {
  const input6Tile = document.querySelector("#tile6");
  valueInput6Tile = input6Tile.value;
  domFour4Tile.innerText = valueInput6Tile;
  turnGreen(icon6Tile);
};

// & Select Fonts
const getFont = document.getElementById("fonts");
const getTiles = document.getElementsByClassName("tile");
if (getFont === "font1") {
  getTiles.classList.toggle("tile-sansSerif");
}
if (getFont === "font2") {
  getTiles.classList.toggle("tile-serif");
}
if (getFont === "font3") {
  getTiles.classList.toggle("tile-mono");
}

console.log(getTiles);

// ~ BUTTONS ~

// & Preview function:

const caughtTool = document.getElementsByClassName("tool");
const caughtIcon = document.getElementsByClassName("wrapper");
const caugthBanner = document.getElementsByClassName("banner");

function previewIn() {
  caughtTool[0].classList.toggle("hidden");
  caugthBanner[0].classList.toggle("hide");
  caughtIcon[0].classList.remove("hidden");
}

caughtIcon[0].addEventListener("click", previewOut, false);

function previewOut() {
  caughtIcon[0].classList.toggle("hidden");
  caugthBanner[0].classList.toggle("hide");
  caughtTool[0].classList.remove("hidden");
}

// & Generate function (download button):

const wallpaper_obj = document.querySelector("#generate");

wallpaper_obj.onclick = () => {
  let user_wallpaper = {
    id: Math.random(1, 100),
    background: "selectionColor1.value",
    tiles: "tiles.value",
    tiles_titles: [],
    resolution: "resolution.value",
  };
  alert(JSON.stringify(user_wallpaper));
};

// & Btn Reset
const btnReset = document.getElementById("reset");
btnReset.onclick = () => {
  window.location.reload();
};
