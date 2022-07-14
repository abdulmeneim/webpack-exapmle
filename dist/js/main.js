/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/public/logo.png
const logo_namespaceObject = __webpack_require__.p + "assets/logoa1af828b4e65d37668e1.png";
;// CONCATENATED MODULE: ./src/header/headerComponent.js
var nav=document.getElementsByTagName("nav")
nav[0].className="container d-flex flex-column flex-md-row justify-content-between nav"

let navItems=["webpack","navLink1","navLink2","navLink3"]
for (const navItem of navItems) {
    var aTag=document.createElement("a")
    aTag.innerHTML=navItem
    aTag.className="align-items-middle d-none d-md-inline-block nav-link text-white display-6"
    nav[0].appendChild(aTag)
}
var fristLink= document.getElementsByTagName("a")[0]
;
const img = document.createElement("img");
img.src=logo_namespaceObject;
img.style.cssText="width:50px;height:50px;margin-left:20px;"
fristLink.appendChild(img);
;// CONCATENATED MODULE: ./src/card/card.js
function createCard(txtColor,bgColor,parentNode,h1Content,pContent,subDivBg) {
    var card=document.createElement("div")
    card.className="my-3 py-3 col-6 text-center overflow-hidden mt-4 "+txtColor+" "+bgColor
    var h1=document.createElement("h1")
    h1.className="display-5"
    h1.innerHTML=h1Content
    card.appendChild(h1)
    var p=document.createElement("p")
    p.className="lead"
    p.innerHTML=pContent
    card.appendChild(p)
    var div=document.createElement("div")
    div.className="shadow-sm mx-auto "+subDivBg
    div.style.cssText="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
    card.appendChild(div)
    parentNode.appendChild(card)
    
}

;// CONCATENATED MODULE: ./src/index.js






var container = document.getElementsByClassName("container")[1]
var row = document.createElement("div")
row.className = "row"
createCard("text-white", "bg-dark", row, "This is heading", "and an even wittier subheading", "bg-white")
createCard("text-dark", "bg-white", row, "This is another heading", "and an even wittier subheading", "bg-dark")
container.appendChild(row)
var row = document.createElement("div")
row.className = "row"
createCard("text-white", "bg-warning", row, "This is heading", "and an even wittier subheading", "bg-white")
createCard("text-warning", "bg-white", row, "This is another heading", "and an even wittier subheading", "bg-warning")
container.appendChild(row)
var row = document.createElement("div")
row.className = "row"
createCard("text-white", "bg-secondary", row, "This is heading", "and an even wittier subheading", "bg-white")
createCard("text-secondary", "bg-white", row, "This is another heading", "and an even wittier subheading", "bg-secondary")
container.appendChild(row)
var row = document.createElement("div")
row.className = "row"
createCard("text-white", "bg-primary", row, "This is heading", "and an even wittier subheading", "bg-white")
createCard("text-primary", "bg-white", row, "This is another heading", "and an even wittier subheading", "bg-primary")
container.appendChild(row)
/******/ })()
;