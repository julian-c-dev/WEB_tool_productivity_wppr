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

// & Generate function:

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

// & Adding Tiles & Titles
const getMain = document.getElementById("main");
const mainContainer = document.createElement("div");

getMain.prepend(mainContainer);
mainContainer.classList.add("tilesContainer");

const dom1Tile = document.createElement("div");
const dom2Tile = document.createElement("div");
const dom3Tile = document.createElement("div");
const dom4Tile = document.createElement("div");

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
};

icon2Tile.onclick = () => {
  mainContainer.append(dom2Tile);
  dom2Tile.classList.add("tile");
  const input2Tile = document.querySelector("#tile2");
  valueInput2Tile = input2Tile.value;
  dom2Tile.innerText = valueInput2Tile;
};

icon3Tile.onclick = () => {
  mainContainer.append(dom3Tile);
  dom3Tile.classList.add("tile");
  const input3Tile = document.querySelector("#tile3");
  valueInput3Tile = input3Tile.value;
  dom3Tile.innerText = valueInput3Tile;
};

icon4Tile.onclick = () => {
  mainContainer.append(dom4Tile);
  dom4Tile.classList.add("tile");
  const input4Tile = document.querySelector("#tile4");
  valueInput4Tile = input4Tile.value;
  dom4Tile.innerText = valueInput4Tile;
};
