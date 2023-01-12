"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item");
  const tabsContent = document.querySelectorAll(".tabcontent");
  const tabsParent = document.querySelector(".tabheader__items");
  const burgerWrapper = document.querySelector(".burger__wrapper");
  const burger = document.querySelector(".burger");
  const burgerMenu = document.querySelector(".burger__menu");
  const body = document.querySelector("body");

  //перевлючение табов

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }
  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  //скрытие бургера при клике вне элемента

  document.addEventListener("click", function (e) {
    const withinBoundaries = e.composedPath().includes(burgerWrapper);
    if (!withinBoundaries) {
      burger.classList.remove("burger_active");
      burgerMenu.classList.remove("burger__menu-active");
      body.classList.remove("hidden");
    }
  });

  //бургер меню

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger_active");
    burgerMenu.classList.toggle("burger__menu-active");
    body.classList.toggle("hidden");
  });
});

const topBtn = document.querySelector(".btn__top");

topBtn.addEventListener("click", scrollToPos);

//скрол наверх

function scrollToPos() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

//скрытие и появление ракеты для скрола вверх

window.addEventListener("scroll", function () {
  if (window.scrollY < window.innerHeight) {
    topBtn.classList.remove("show");
  } else {
    topBtn.classList.add("show");
  }
});
