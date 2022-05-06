"use strict";

const c = console.log.bind(console);

// === get json object =====

let theClass = [];
let mainObj = {};

let showObj = function () {
  for (let prop in mainObj) {
    console.log(prop);
    console.log(mainObj[prop]);

    // ==== create card element and add id and classname =======
    const card = document.createElement("div");
    card.className += "card__container";
    card.setAttribute("id", "card-container");

    // ========== create img Element and add data ============
    const img = document.createElement("img");
    img.setAttribute("class", "card__img");
    img.setAttribute("id", "card-img");
    img.style.backgroundImage = "url(" + mainObj[prop].Image_URL + ")";
    card.appendChild(img);

    // ========== create h1 Element and add data ============
    const hOne = document.createElement("h1");
    hOne.setAttribute("class", "card__h1");
    hOne.setAttribute("id", "card-h1");
    card.appendChild(hOne);
    hOne.innerHTML = mainObj[prop].Text1;

    // ========== create h1 Element and add data ============
    const hTwo = document.createElement("h3");
    hTwo.setAttribute("class", "card__h3");
    hTwo.setAttribute("id", "card-h3");
    card.appendChild(hTwo);
    hTwo.innerHTML = mainObj[prop].Text;

    c(card);

    // 👇️ Add clone to body
    document.getElementById("specialty").appendChild(card);
  }
};

fetch("./shame.json").then(function (resp) {
  return resp.json().then(function (data) {
    theClass = data.data.reviewer;
    mainObj = theClass;
    showObj();
  });
});

// =================== show menu variables =====================

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// ====================== Show Menu if variable exists =========================

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    console.log("what the fuck", navToggle);
  });
}

// ====================== Hide Menu if variable exists =========================

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    console.log("what the fuck", navClose);
  });
}

// ========================== remove mobile menu ================================

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((x) => x.addEventListener("click", linkAction));
