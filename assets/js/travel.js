console.clear();

gsap.registerPlugin(ScrollTrigger);
const slides = gsap.utils.toArray(".slide");
const t = gsap.to(slides, {
  xPercent: -(100 * (slides.length - 1)),
  ease: "none",
  scrollTrigger: {
    trigger: "#slidesWrapper",
    start: "top top",
    end: "+=2000",
    pin: true,
    scrub: true,
    snap: 1 / (slides.length - 1),
    // markers: true,
  },
});

const cardContainers = gsap.utils.toArray(".card-container");
const cards = gsap.utils.toArray(".card");
cards.forEach((card, index) => {
  gsap.from(card, {
    opacity: 0.2,
    scale: 0.5,
    transformOrigin: "center center",
    ease: "none",
    scrollTrigger: {
      trigger: cardContainers[index],
      containerAnimation: t,
      start: "left 75%",
      end: "left: 25%",
      // markers: { startColor: "fuchsia", endColor: "fuchsia" },
      scrub: true,
    },
  });
});
