// This code stinks, I know, it was the first approach (I am learning), It needs to become DRY.

//  & 1.Select your favorite background from the following options:

let background = "selection1";
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
  background = "selection1";
};

selectionColor2.onclick = () => {
  document.body.style.background =
    "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)";
  document.body.style.backgroundSize = "100vw 130vh";
  background = "selection2";
};

selectionColor3.onclick = () => {
  document.body.style.background =
    "linear-gradient(to top, #667eea 0%, #764ba2 100%)";
  document.body.style.backgroundSize = "100vw 130vh";
  background = "selection3";
};

selectionColor4.onclick = () => {
  document.body.style.background =
    "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)";
  document.body.style.backgroundSize = "100vw 130vh";
  background = "selection4";
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
  background = "selection5";
};

selectionColor6.onclick = () => {
  document.body.style.background =
    "linear-gradient(to top, #434343 0%, black 100%)";
  document.body.style.backgroundSize = "100vw 130vh";
  background = "selection6";
};

// & 2 - How many tiles do you want to add to your Wallpaper?

let tiles = 0;

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

function removeClassIconDisabled() {
  icon1Tile.classList.remove("icon-disable");
  icon2Tile.classList.remove("icon-disable");
  icon1Tile.classList.add("icon-regular");
  icon2Tile.classList.add("icon-regular");
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
  removeClassIconDisabled();
  getFont.onclick = () => {
    turnFontBig();
  };
  tiles = 2;
};

caugthSelectFour.onclick = () => {
  removeDisabled();
  addIcon();
  removeTextDomTwo();
  appendTilesDomFour();
  inputsToggleDomFour();
  tilesToggleDomFour();
  getFont.onclick = () => {
    turnFontSmall();
  };
  tiles = 4;
};

// & 3 - Type the titles for your tiles and add them by clicking on the plus icon:

const icon1Tile = document.getElementById("iconTile1");
const icon2Tile = document.getElementById("iconTile2");
const icon3Tile = document.getElementById("iconTile3");
const icon4Tile = document.getElementById("iconTile4");
const icon5Tile = document.getElementById("iconTile5");
const icon6Tile = document.getElementById("iconTile6");
let title1 = "";
let title2 = "";
let title3 = "";
let title4 = "";
let title5 = "";
let title6 = "";

function turnGreen(icon) {
  icon.classList.add("icon-actived");
  setTimeout(function () {
    icon.classList.remove("icon-actived");
  }, 2000);
}

icon1Tile.onclick = () => {
  const input1Tile = document.querySelector("#tile1");
  title1 = input1Tile.value;
  domTwo1Tile.innerText = title1;
  turnGreen(icon1Tile);
};

icon2Tile.onclick = () => {
  const input2Tile = document.querySelector("#tile2");
  title2 = input2Tile.value;
  domTwo2Tile.innerText = title2;
  turnGreen(icon2Tile);
};

icon3Tile.onclick = () => {
  const input3Tile = document.querySelector("#tile3");
  title3 = input3Tile.value;
  domFour1Tile.innerText = title3;
  turnGreen(icon3Tile);
};

icon4Tile.onclick = () => {
  const input4Tile = document.querySelector("#tile4");
  title4 = input4Tile.value;
  domFour2Tile.innerText = title4;
  turnGreen(icon4Tile);
};

icon5Tile.onclick = () => {
  const input5Tile = document.querySelector("#tile5");
  title5 = input5Tile.value;
  domFour3Tile.innerText = title5;
  turnGreen(icon5Tile);
};

icon6Tile.onclick = () => {
  const input6Tile = document.querySelector("#tile6");
  title6 = input6Tile.value;
  domFour4Tile.innerText = title6;
  turnGreen(icon6Tile);
};

// & 4 - Select a beautiful font family for your tiles titles:

let font = "Courgette";

const getFont = document.getElementById("fonts");

function turnFontBig() {
  const tileBig = document.getElementsByClassName("tile-big");

  if (getFont.value === "font1") {
    font = "Courgette";
    for (let element of tileBig) element.style.fontFamily = "Courgette";
  }

  if (getFont.value === "font2") {
    font = "Roboto";
    for (let element of tileBig) element.style.fontFamily = "Roboto";
  }
  if (getFont.value === "font3") {
    font = "Comic Neue";
    for (let element of tileBig) element.style.fontFamily = "Comic Neue";
  }
  if (getFont.value === "font4") {
    font = "PT Serif";
    for (let element of tileBig) element.style.fontFamily = "PT Serif";
  }
  if (getFont.value === "font5") {
    font = "Space Mono";
    for (let element of tileBig) element.style.fontFamily = "Space Mono";
  }
}

function turnFontSmall() {
  const tileSmall = document.getElementsByClassName("tile-small");

  if (getFont.value === "font1") {
    font = "Courgette";
    for (let element of tileSmall) element.style.fontFamily = "Courgette";
  }

  if (getFont.value === "font2") {
    font = "Roboto";
    for (let element of tileSmall) element.style.fontFamily = "Roboto";
  }

  if (getFont.value === "font3") {
    font = "Comic Neue";
    for (let element of tileSmall) element.style.fontFamily = "Comic Neue";
  }

  if (getFont.value === "font4") {
    font = "PT Serif";
    for (let element of tileSmall) element.style.fontFamily = "PT Serif";
  }

  if (getFont.value === "font5") {
    font = "Space Mono";
    for (let element of tileSmall) element.style.fontFamily = "Space Mono";
  }
}

// & 5 - Choose the resolution of your screen in pixels:

const getRadios = document.getElementById("radios");
let resolution;

// ~ BUTTONS ~

// & Preview function:

const caughtTool = document.getElementsByClassName("tool");
const caughtIcon = document.getElementsByClassName("wrapper");
const caugthBanner = document.getElementsByClassName("banner");
const caugthCredits = document.getElementsByClassName("credit__side");

function previewIn() {
  caughtTool[0].classList.toggle("hidden");
  caugthBanner[0].classList.toggle("hide");
  caughtIcon[0].classList.remove("hidden");
  caugthCredits[0].classList.toggle("hidden");
}

caughtIcon[0].addEventListener("click", previewOut, false);

function previewOut() {
  caughtIcon[0].classList.toggle("hidden");
  caugthBanner[0].classList.toggle("hide");
  caughtTool[0].classList.remove("hidden");
  caugthCredits[0].classList.toggle("hidden");
}

// & Generate function (download button):

const wallpaper_obj = document.querySelector("#generate");

function showTitles(tiles) {
  if (tiles === 0) return ["No titles selected"];
  if (tiles === 2) return [title1, title2];
  if (tiles === 4) return [title3, title4, title5, title6];
}

wallpaper_obj.onclick = () => {
  let user_wallpaper = {
    id: Math.floor(Math.random() * (1000 - 100) + 100) / 100,
    background,
    tiles,
    titles: showTitles(tiles),
    font,
    resolution: [...getRadios.children].find((c) => c.checked).value,
  };

  console.log(JSON.stringify(user_wallpaper));
};

// & Btn Reset
const btnReset = document.getElementById("reset");
btnReset.onclick = () => {
  window.location.reload();
};
