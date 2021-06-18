// This code stinks, I know, it was the first approach (I am learning), It needs to become DRY.

//  & Selection background

const selectionColor1 = document.querySelector(".select1");
const selectionColor2 = document.querySelector(".select2");
const selectionColor3 = document.querySelector(".select3");
const selectionColor4 = document.querySelector(".select4");
const selectionColor5 = document.querySelector(".select5");
const selectionColor6 = document.querySelector(".select6");

selectionColor1.onclick = () => {
  document.body.style.background =
    "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)";
  document.body.style.backgroundSize = "100vw 130vh";
};

selectionColor2.onclick = () => {
  document.body.style.background =
    "linear-gradient(to top, #30cfd0 0%, #330867 100%)";
  document.body.style.backgroundSize = "100vw 130vh";
};

selectionColor3.onclick = () => {
  document.body.style.background =
    "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)";
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

//  & Selection NUMBER of TILES (2 or 4)
const caugthSelectTwo = document.querySelector(".selectTwo");
const caugthSelectFour = document.querySelector(".selectFour");
const getMain = document.getElementById("main");
const mainContainer = document.createElement("div");
getMain.prepend(mainContainer);
mainContainer.classList.add("tilesContainer");

const domTwo1Tile = document.createElement("div");
const domTwo2Tile = document.createElement("div");

const domFour1Tile = document.createElement("div");
const domFour2Tile = document.createElement("div");
const domFour3Tile = document.createElement("div");
const domFour4Tile = document.createElement("div");

caugthSelectTwo.onclick = () => {
  mainContainer.append(domTwo1Tile);
  mainContainer.append(domTwo2Tile);
  domFour1Tile.classList.toggle("tile-small");
  domFour2Tile.classList.toggle("tile-small");
  domFour3Tile.classList.toggle("tile-small");
  domFour4Tile.classList.toggle("tile-small");
  domTwo1Tile.classList.add("tile-big");
  domTwo2Tile.classList.add("tile-big");
};

caugthSelectFour.onclick = () => {
  mainContainer.append(domFour1Tile);
  mainContainer.append(domFour2Tile);
  mainContainer.append(domFour3Tile);
  mainContainer.append(domFour4Tile);
  domTwo1Tile.classList.toggle("tile-big");
  domTwo2Tile.classList.toggle("tile-big");
  domFour1Tile.classList.add("tile-small");
  domFour2Tile.classList.add("tile-small");
  domFour3Tile.classList.add("tile-small");
  domFour4Tile.classList.add("tile-small");
};

/*// & Adding TITLES to TILES


const icon1Tile = document.getElementById("iconTile1");
const icon2Tile = document.getElementById("iconTile2");
const icon3Tile = document.getElementById("iconTile3");
const icon4Tile = document.getElementById("iconTile4");

icon1Tile.onclick = () => {
  mainContainer.append(dom1Tile);
  dom1Tile.classList.add("tile");
  const input1Tile = document.querySelector("#tile1");
  valueInput1Tile = input1Tile.value;
  dom1Tile.innerText = valueInput1Tile;
  iconTile1.classList.add("green");
};

icon2Tile.onclick = () => {
  mainContainer.append(dom2Tile);
  dom2Tile.classList.add("tile");
  const input2Tile = document.querySelector("#tile2");
  valueInput2Tile = input2Tile.value;
  dom2Tile.innerText = valueInput2Tile;
  iconTile2.classList.add("green");
};

icon3Tile.onclick = () => {
  mainContainer.append(dom3Tile);
  dom3Tile.classList.add("tile");
  const input3Tile = document.querySelector("#tile3");
  valueInput3Tile = input3Tile.value;
  dom3Tile.innerText = valueInput3Tile;
  iconTile3.classList.add("green");
};

icon4Tile.onclick = () => {
  mainContainer.append(dom4Tile);
  dom4Tile.classList.add("tile");
  const input4Tile = document.querySelector("#tile4");
  valueInput4Tile = input4Tile.value;
  dom4Tile.innerText = valueInput4Tile;
  iconTile4.classList.add("green");
};*/

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
