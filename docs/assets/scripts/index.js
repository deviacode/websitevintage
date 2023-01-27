const menu = document.querySelector(".menu");
const btnmenu = document.querySelector(".btnmenu");
const anchors = document.querySelectorAll(
  ".menu > li a[data-active='true'], .menu > li > ul > li a[data-active='true']"
);
const submenu = document.querySelector(".multimenu");

btnmenu.addEventListener("click", e => {
  const vis = menu.getAttribute("data-visible");
  if (vis === "false") {
    menu.setAttribute("data-visible", true);
    btnmenu.setAttribute("aria-expanded", true);
  } else {
    menu.setAttribute("data-visible", false);
    btnmenu.setAttribute("aria-expanded", false);
  }
});

anchors.forEach(anchor => {
  anchor.addEventListener("click", e => {
    menu.setAttribute("data-visible", false);
    btnmenu.setAttribute("aria-expanded", false);
  });
});

submenu.addEventListener("click", e => {
  document.querySelector(".submenu").classList.toggle("selected");
});

/* Función ofuscada sliders*/

(function () {
  const sliders = [...document.querySelectorAll(".slider")];

  const arrowBefore = document.querySelector(".before");
  const arrowNext = document.querySelector(".next");

  let value;

  arrowNext.addEventListener("click", () => changePlace(1));
  arrowBefore.addEventListener("click", () => changePlace(-1));

  function changePlace(change) {
    const currentElement = Number(
      document.querySelector(".slider-show").dataset.id
    );

    value = currentElement;
    value += change;

    if (value === 0 || value == sliders.length + 1) {
      value = value === 0 ? sliders.length : 1;
    }

    sliders[currentElement - 1].classList.toggle("slider-show");
    sliders[value - 1].classList.toggle("slider-show");
  }
})();
