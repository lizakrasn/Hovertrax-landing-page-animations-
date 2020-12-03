import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Draggable } from "gsap/Draggable";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import navigation from "./animations/navigation";
import header from "./animations/header";
import product from "./animations/product";
import modes from "./animations/modes";
import footer from "./animations/footer";

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

navigation();
header();
product();
modes();
footer();


