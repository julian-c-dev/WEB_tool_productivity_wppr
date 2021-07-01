// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"app/js/main.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// This code stinks, I know, it was the first approach (I am learning), It needs to become DRY.
//  & 1.Select your favorite background from the following options:
var background = "selection1";
var selectionColor1 = document.querySelector(".select1");
var selectionColor2 = document.querySelector(".select2");
var selectionColor3 = document.querySelector(".select3");
var selectionColor4 = document.querySelector(".select4");
var selectionColor5 = document.querySelector(".select5");
var selectionColor6 = document.querySelector(".select6"); // ~ onclick Functions:

selectionColor1.onclick = function () {
  document.body.style.background = "linear-gradient(to top, #30cfd0 0%, #330867 100%)";
  document.body.style.backgroundSize = "100vw 130vh";
  background = "selection1";
};

selectionColor2.onclick = function () {
  document.body.style.background = "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)";
  document.body.style.backgroundSize = "100vw 130vh";
  background = "selection2";
};

selectionColor3.onclick = function () {
  document.body.style.background = "linear-gradient(to top, #667eea 0%, #764ba2 100%)";
  document.body.style.backgroundSize = "100vw 130vh";
  background = "selection3";
};

selectionColor4.onclick = function () {
  document.body.style.background = "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)";
  document.body.style.backgroundSize = "100vw 130vh";
  background = "selection4";
};

selectionColor5.onclick = function () {
  document.body.style.background = "linear-gradient(to top,\n        #dbdcd7 0%,\n        #dddcd7 24%,\n        #e2c9cc 30%,\n        #e7627d 46%,\n        #b8235a 59%,\n        #801357 71%,\n        #3d1635 84%,\n        #1c1a27 100%\n      )";
  document.body.style.backgroundSize = "100vw 130vh";
  background = "selection5";
};

selectionColor6.onclick = function () {
  document.body.style.background = "linear-gradient(to top, #434343 0%, black 100%)";
  document.body.style.backgroundSize = "100vw 130vh";
  background = "selection6";
}; // & 2 - How many tiles do you want to add to your Wallpaper?


var tiles = 0; // * images:

var caugthSelectTwo = document.querySelector(".selectTwo");
var caugthSelectFour = document.querySelector(".selectFour"); // * DOM elements:

var getMain = document.getElementById("main");
var mainContainer = document.createElement("div");
var domTwo1Tile = document.createElement("div");
var domTwo2Tile = document.createElement("div");
var domFour1Tile = document.createElement("div");
var domFour2Tile = document.createElement("div");
var domFour3Tile = document.createElement("div");
var domFour4Tile = document.createElement("div"); // * creating DOM layout

getMain.prepend(mainContainer);
mainContainer.classList.add("tilesContainer"); // * icons:

var getIcons = document.querySelectorAll(".fas"); // * input-groups * :

var getDisabled = document.querySelectorAll("[disabled]");
var inputGroup1 = document.getElementsByClassName("input1");
var inputGroup2 = document.getElementsByClassName("input2");
var inputGroup3 = document.getElementsByClassName("input3");
var inputGroup4 = document.getElementsByClassName("input4");
var inputGroup5 = document.getElementsByClassName("input5");
var inputGroup6 = document.getElementsByClassName("input6"); // ~ Functions:

function removeDisabled() {
  var _iterator = _createForOfIteratorHelper(getDisabled),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var input = _step.value;
      input.removeAttribute("disabled");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function addIcon() {
  var _iterator2 = _createForOfIteratorHelper(getIcons),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var icon = _step2.value;
      icon.classList.remove("icon-disable");
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
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
} // ~ onclick Functions:


caugthSelectTwo.onclick = function () {
  removeDisabled();
  addIcon();
  removeTextDomFour();
  appendTilesDomTwo();
  inputsToggleDomTwo();
  tilesToggleDomTwo();
  removeClassIconDisabled();

  getFont.onclick = function () {
    turnFontBig();
  };

  tiles = 2;
};

caugthSelectFour.onclick = function () {
  removeDisabled();
  addIcon();
  removeTextDomTwo();
  appendTilesDomFour();
  inputsToggleDomFour();
  tilesToggleDomFour();

  getFont.onclick = function () {
    turnFontSmall();
  };

  tiles = 4;
}; // & 3 - Type the titles for your tiles and add them by clicking on the plus icon:


var icon1Tile = document.getElementById("iconTile1");
var icon2Tile = document.getElementById("iconTile2");
var icon3Tile = document.getElementById("iconTile3");
var icon4Tile = document.getElementById("iconTile4");
var icon5Tile = document.getElementById("iconTile5");
var icon6Tile = document.getElementById("iconTile6");
var title1 = "";
var title2 = "";
var title3 = "";
var title4 = "";
var title5 = "";
var title6 = "";

function turnGreen(icon) {
  icon.classList.add("icon-actived");
  setTimeout(function () {
    icon.classList.remove("icon-actived");
  }, 2000);
}

icon1Tile.onclick = function () {
  var input1Tile = document.querySelector("#tile1");
  title1 = input1Tile.value;
  domTwo1Tile.innerText = title1;
  turnGreen(icon1Tile);
};

icon2Tile.onclick = function () {
  var input2Tile = document.querySelector("#tile2");
  title2 = input2Tile.value;
  domTwo2Tile.innerText = title2;
  turnGreen(icon2Tile);
};

icon3Tile.onclick = function () {
  var input3Tile = document.querySelector("#tile3");
  title3 = input3Tile.value;
  domFour1Tile.innerText = title3;
  turnGreen(icon3Tile);
};

icon4Tile.onclick = function () {
  var input4Tile = document.querySelector("#tile4");
  title4 = input4Tile.value;
  domFour2Tile.innerText = title4;
  turnGreen(icon4Tile);
};

icon5Tile.onclick = function () {
  var input5Tile = document.querySelector("#tile5");
  title5 = input5Tile.value;
  domFour3Tile.innerText = title5;
  turnGreen(icon5Tile);
};

icon6Tile.onclick = function () {
  var input6Tile = document.querySelector("#tile6");
  title6 = input6Tile.value;
  domFour4Tile.innerText = title6;
  turnGreen(icon6Tile);
}; // & 4 - Select a beautiful font family for your tiles titles:


var font = "Courgette";
var getFont = document.getElementById("fonts");

function turnFontBig() {
  var tileBig = document.getElementsByClassName("tile-big");

  if (getFont.value === "font1") {
    font = "Courgette";

    var _iterator3 = _createForOfIteratorHelper(tileBig),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var element = _step3.value;
        element.style.fontFamily = "Courgette";
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }

  if (getFont.value === "font2") {
    font = "Roboto";

    var _iterator4 = _createForOfIteratorHelper(tileBig),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _element = _step4.value;
        _element.style.fontFamily = "Roboto";
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }

  if (getFont.value === "font3") {
    font = "Comic Neue";

    var _iterator5 = _createForOfIteratorHelper(tileBig),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _element2 = _step5.value;
        _element2.style.fontFamily = "Comic Neue";
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }

  if (getFont.value === "font4") {
    font = "PT Serif";

    var _iterator6 = _createForOfIteratorHelper(tileBig),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _element3 = _step6.value;
        _element3.style.fontFamily = "PT Serif";
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }

  if (getFont.value === "font5") {
    font = "Space Mono";

    var _iterator7 = _createForOfIteratorHelper(tileBig),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _element4 = _step7.value;
        _element4.style.fontFamily = "Space Mono";
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  }
}

function turnFontSmall() {
  var tileSmall = document.getElementsByClassName("tile-small");

  if (getFont.value === "font1") {
    font = "Courgette";

    var _iterator8 = _createForOfIteratorHelper(tileSmall),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var element = _step8.value;
        element.style.fontFamily = "Courgette";
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
  }

  if (getFont.value === "font2") {
    font = "Roboto";

    var _iterator9 = _createForOfIteratorHelper(tileSmall),
        _step9;

    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var _element5 = _step9.value;
        _element5.style.fontFamily = "Roboto";
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
  }

  if (getFont.value === "font3") {
    font = "Comic Neue";

    var _iterator10 = _createForOfIteratorHelper(tileSmall),
        _step10;

    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var _element6 = _step10.value;
        _element6.style.fontFamily = "Comic Neue";
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
  }

  if (getFont.value === "font4") {
    font = "PT Serif";

    var _iterator11 = _createForOfIteratorHelper(tileSmall),
        _step11;

    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var _element7 = _step11.value;
        _element7.style.fontFamily = "PT Serif";
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
  }

  if (getFont.value === "font5") {
    font = "Space Mono";

    var _iterator12 = _createForOfIteratorHelper(tileSmall),
        _step12;

    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var _element8 = _step12.value;
        _element8.style.fontFamily = "Space Mono";
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
  }
} // & 5 - Choose the resolution of your screen in pixels:


var getRadios = document.getElementById("radios");
var resolution; // ~ BUTTONS ~
// & Preview function:

var caughtTool = document.getElementsByClassName("tool");
var caughtIcon = document.getElementsByClassName("wrapper");
var caugthBanner = document.getElementsByClassName("banner");
var caugthCredits = document.getElementsByClassName("credit__side");
var caughtPreviewBtn = document.getElementById("preview");
caughtPreviewBtn.addEventListener("click", previewIn, false);

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
} // & Generate function (download button):


var wallpaper_obj = document.querySelector("#generate");
var toolContent = document.querySelector(".tool__content");
var toolContentThanks = document.querySelector(".tool__content_thanks");
var toolSpinner = document.querySelector(".spinner");

function showTitles(tiles) {
  if (tiles === 0) return ["No titles selected"];
  if (tiles === 2) return [title1, title2];
  if (tiles === 4) return [title3, title4, title5, title6];
}

var textBackground = document.getElementById("textBackground");
var textTiles = document.getElementById("textTiles");
var textTitles = document.getElementById("textTitles");
var textFont = document.getElementById("textFont");
var textResolution = document.getElementById("textResolution");

wallpaper_obj.onclick = function () {
  var user_wallpaper = {
    background: background,
    tiles: tiles,
    titles: showTitles(tiles),
    font: font,
    resolution: _toConsumableArray(getRadios.children).find(function (c) {
      return c.checked;
    }).value
  };
  toolContent.classList.toggle("hidden");
  console.log(JSON.stringify(user_wallpaper));
  textBackground.innerHTML = "Background: " + "<strong>" + user_wallpaper.background + "</strong>";
  textTiles.innerHTML = "Tiles: " + "<strong>" + user_wallpaper.tiles + "</strong>";
  textTitles.innerHTML = "Titles: " + "<strong>" + user_wallpaper.titles + "</strong>";
  textFont.innerHTML = "Font: " + "<strong>" + user_wallpaper.font + "</strong>";
  textResolution.innerHTML = "Resolution: " + "<strong>" + user_wallpaper.resolution + "</strong>";
  setTimeout(function () {
    toolSpinner.style.display = "flex";
  }, 200);
  setTimeout(function () {
    toolSpinner.style.display = "none";
  }, 3000);
  setTimeout(function () {
    toolContentThanks.style.display = "flex";
  }, 3000);
  setTimeout(function () {
    toolContent.remove();
  }, 3000);
}; // & Btn Reset


var btnReset1 = document.getElementById("reset1");
var btnReset2 = document.getElementById("reset2");

btnReset1.onclick = function () {
  window.location.reload();
};

btnReset2.onclick = function () {
  window.location.reload();
};
},{}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51553" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app/js/main.js"], null)
//# sourceMappingURL=/main.3da0a6d0.js.map