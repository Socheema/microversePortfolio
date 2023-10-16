const sections = document.querySelectorAll(".section");

function animateOnScroll() {
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionBottom = sectionTop + sectionHeight;

    if (sectionTop <= scrollY + windowHeight && sectionBottom >= scrollY) {
      section.classList.add("in-view");
    }
  });
}

// Trigger the initial check when the page loads
animateOnScroll();

// Add a scroll event listener
window.addEventListener("scroll", animateOnScroll);

const links = document.querySelectorAll("nav a");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});


const menu = document.getElementById('menu')
const nav = document.querySelector("nav")
console.log(nav)

menu.addEventListener('click', function () {
    nav.classList.toggle('active')
  console.log("Im clicked")
})