import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Draggable } from "gsap/Draggable";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import header from "./animations/header";
import product from "./animations/product";
import modes from "./animations/modes";
import footer from "./animations/footer";
import animateText from "./animations/animateText";

gsap.registerPlugin(CSSRulePlugin, Draggable, EaselPlugin, MotionPathPlugin, PixiPlugin, TextPlugin, ScrollToPlugin, ScrollTrigger);


function addBurgerAutoClose() {
  const checkbox = <HTMLInputElement>document.getElementById('navigation-toggler');

  if (!checkbox) {
    console.log("Not found");

    return
  }

  const links = document.querySelectorAll(".navigation__item-link");
  links.forEach(link => {
    link.addEventListener("click", () => {
      checkbox.checked = false;
    });
  })
}

addBurgerAutoClose();

header();
product();
modes();
footer();

animateText(document.querySelector(".header__subtitle"));

const titles = document.querySelectorAll(".property__title");
titles.forEach(title => animateText(title));


