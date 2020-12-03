import gsap from "gsap"

export default function() {
  gsap.from(".header__media", {
    scrollTrigger: ".header__media",
    opacity: 0,
    x: 1200,
    duration: 3,
  });
  
  gsap.from(".header__title", {
    scrollTrigger: ".header__title",
    scale: 0,
    opacity: 0,
    x: -1000,
    duration: 3,
  });
  
  gsap.from(".header__subtitle", {
    scrollTrigger: ".header__subtitle",
    opacity: 0,
    y: 100,
    delay: 2,
    duration: 2,
  });

  gsap.from(".header__button", {
    scrollTrigger: ".header__button",
    opacity: 0,
    x: 100,
    rotation: 360,
    delay: 2,
    duration: 1,
  });

  gsap.from(".header__arrow", {
    scrollTrigger: ".header__arrow",
    opacity: 0,
    x: 200,
    delay: 3,
    duration: 1,
  });
}