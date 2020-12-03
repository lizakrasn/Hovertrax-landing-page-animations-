import gsap from "gsap";

function startTrigger(selector : string) {
  return ({
    trigger: selector,
    toggleActions: "play none none none",
  });
}

export default function() {
  gsap.from(".product__media", {
    scrollTrigger: startTrigger('.product__media'),
    opacity: 0,
    x: -100,
    duration: 2,
    
  });

  gsap.from(".product__title", {
    scrollTrigger: startTrigger(".product_title"),
    opacity: 0,
    scale: 0.5,
    y: -70,
    duration: 3,
  });

  gsap.from(".gsap-animationFirst", {
    scrollTrigger: startTrigger(".gsap-animationFirst"),
    opacity: 0,
    scale: 0.5,
    x: 200,
    duration: 2,
  });

  gsap.from(".product__property .property__item", {
    scrollTrigger: startTrigger(".product__property .property__item"),
    opacity: 0,
    stagger: 0.5,
    scale: 0.5,
    x: 1000,
    duration: 3,
  });

  gsap.from(".gsap-animationSecond", {
    scrollTrigger: {
      start: 'top 80%',
      trigger: ".gsap-animationSecond"
    },
    opacity: 0,
    scale: 0.5,
    x: 200,
    duration: 2,
  });

  gsap.from(".product__options .product__image-hoverboard", {
    scrollTrigger: startTrigger(".product__options .product__image-hoverboard"),
    opacity: 0,
    x: 200,
    duration: 3,
  });

  gsap.from(".product__options .colorful-buttons", {
    scrollTrigger: startTrigger(".product__options .colorful-buttons"),
    opacity: 0,
    x: 200,
    duration: 3,
  });

  gsap.from(".product__arrow", {
    scrollTrigger: {
      start: 'top center',
      trigger: ".product__arrow"
    },
    opacity: 0,
    x: 100,
    duration: 1,
  });
}