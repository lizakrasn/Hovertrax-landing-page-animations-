import gsap from "gsap";

function startTrigger(selector : string) {
  return ({
    trigger: selector,
    toggleActions: "play none none none"
  });
}

export default function() {
  gsap.from(".gsap-animationThird", {
    scrollTrigger: startTrigger(".gsap-animationThird"),
    opacity: 0,
    x: -300,
    duration: 2,
  })

  gsap.from(".modes__property .property__item", {
    scrollTrigger: startTrigger(".modes__property .property__item"),
    opacity: 0,
    stagger: 0.5,
    x: -300,
    delay: 1,
    duration: 2,
  })

  gsap.from(".modes__info-speed", {
    scrollTrigger: ".modes__info-speed",
    opacity: 0,
    scale: 0,
    x: -300,
    delay: 2,
    duration: 2,
  })

  gsap.from(".modes__media", {
    scrollTrigger: startTrigger(".modes__media"),
    opacity: 0,
    x: 1200,
    duration: 3,
  });

  gsap.from(".modes__button", {
    scrollTrigger: startTrigger(".modes__button"),
    opacity: 0,
    x: 100,
    rotation: 360,
    delay: 2,
    duration: 1,
  });

  gsap.from(".modes__arrow", {
    scrollTrigger: startTrigger(".modes__arrow"),
    opacity: 0,
    x: 200,
    delay: 3,
    duration: 1,
  });
}