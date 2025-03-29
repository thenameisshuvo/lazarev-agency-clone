// Preloader
window.addEventListener("load", () => {
  gsap.to("#preloader", {
    opacity: 0,
    duration: 0.5,
    onComplete: () =>
      (document.getElementById("preloader").style.display = "none"),
  });
});

// Smooth scrolling
const lenis = new Lenis({
  lerp: 0.1,
  smooth: true,
  direction: "vertical",
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

mobileMenuButton.addEventListener("click", () => {
  gsap.to(mobileMenu, {
    opacity: 1,
    pointerEvents: "auto",
    duration: 0.3,
  });
});

closeMenu.addEventListener("click", () => {
  gsap.to(mobileMenu, {
    opacity: 0,
    pointerEvents: "none",
    duration: 0.3,
  });
});

// Cursor trail effect
const cursor = document.getElementById("cursor-trail");
let mouseX = 0,
  mouseY = 0;
let posX = 0,
  posY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

gsap.ticker.add(() => {
  posX += (mouseX - posX) / 6;
  posY += (mouseY - posY) / 6;

  gsap.set(cursor, {
    x: posX - 10,
    y: posY - 10,
  });
});

// Scroll animations
gsap.utils.toArray(".animate-on-scroll").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
  });
});

// Video section interaction
const videoSection = document.querySelector(".group");
const videoOverlay = document.querySelector(".absolute.inset-0");

videoSection.addEventListener("mousemove", (e) => {
  const rect = videoSection.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  gsap.to(videoOverlay, {
    background: `radial-gradient(circle at ${x}px ${y}px, transparent 0%, rgba(0,0,0,0.3) 100%)`,
    duration: 0.5,
  });
});

videoSection.addEventListener("mouseleave", () => {
  gsap.to(videoOverlay, {
    background: "rgba(0,0,0,0.3)",
    duration: 0.5,
  });
});

// Dropdown menu animation
const dropdown = document.getElementById("dropdown");
const dropdownLinks = document.getElementById("dropdown-links");

gsap.set(dropdownLinks, { y: -20, opacity: 0, display: "none" });

dropdown.addEventListener("mouseenter", () => {
  gsap.to(dropdownLinks, {
    y: 0,
    opacity: 1,
    display: "block",
    duration: 0.3,
    ease: "power2.out",
  });
});

dropdown.addEventListener("mouseleave", () => {
  gsap.to(dropdownLinks, {
    y: -20,
    opacity: 0,
    duration: 0.2,
    ease: "power2.in",
    onComplete: () => (dropdownLinks.style.display = "none"),
  });
});
