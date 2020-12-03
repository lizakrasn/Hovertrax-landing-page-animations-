import gsap from "gsap";

export default function() {
  function startTrigger(selector : string) {
    return ({
      trigger: selector,
      toggleActions: "play none none none"
    });
  }

  gsap.from(".footer__image-container", {
    scrollTrigger: startTrigger(".footer__image-container"),
    opacity: 0,
    x: 500,
    duration: 3,
  })

  gsap.from(".footer__info", {
    scrollTrigger: startTrigger(".footer__info"),
    opacity: 0,
    x: -600,
    duration: 3,
  })
}