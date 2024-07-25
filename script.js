function magneticEffect() {
  Shery.makeMagnet(".nav-bar li");
  const cursor = document.querySelector("#cursor");
  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      left: e.clientX - 10 + "px",
      top: e.clientY - 10 + "px",
      ease: Circ.ease,
      opacity: 1,
      scale: 1,
    });
  });
}

function valueSetters() {
  gsap.set("nav", { opacity: 0 });
  gsap.set(".home-right img", { x: "-100%", opacity: 0 });
  gsap.set(".lines", { opacity: 0 });
  gsap.set(".home-left h2", { y: "100%", opacity: 0 });
  gsap.set(".home-left h1", { y: "100%", opacity: 0 });
}

function animationHomePage() {
  let tl = gsap.timeline();
  tl.to("nav", {
    opacity: 1,
    stagger: 0.05,
    duration: 1,
    ease: Expo.easeInOut,
  });
  tl.to(".home-right img", {
    x: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 1.5,
    ease: Expo.easeInOut,
  });
  tl.to(".lines", {
    opacity: 1,
    stagger: 0.05,
    duration: 0.5,
    ease: Expo.easeInOut,
  });
  tl.to(".home-left h2", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 1.2,
    ease: Expo.easeInOut,
  });
  tl.to(".home-left h1", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 1,
    ease: Expo.easeInOut,
  });
}

valueSetters();
animationHomePage();
magneticEffect();
