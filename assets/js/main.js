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
