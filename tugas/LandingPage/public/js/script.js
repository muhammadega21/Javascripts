// Text animation
let text = document.querySelector(".banner .left h1");
const textAnimated = () => {
  setTimeout(() => {
    text.textContent = "KAFEKODING";
  }, 0);
  setTimeout(() => {
    text.textContent = "KAMI MEMILIH";
  }, 4000);
  setTimeout(() => {
    text.textContent = "TURUN TANGAN";
  }, 8000);
};

textAnimated();
setInterval(textAnimated, 12000);

// map
const map = document.getElementById("map");
map.innerHTML =
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3011142301625!2d100.35969899999999!3d-0.9225663000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b8b50f84e2df%3A0x6b663fb549733102!2sUniversitas%20Metamedia!5e0!3m2!1sid!2sde!4v1704718476932!5m2!1sid!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

// navbar
let section = document.querySelectorAll("section");
let navlink = document.querySelectorAll("nav .nav-link ul a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("nav .nav-link ul a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// card fade up
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.setAttribute("data-aos", "zoom-in");
  card.setAttribute("data-aos-duration", 1000);
  card.setAttribute("data-aos-offest", 0);
});

// Tahun
let tahun = document.getElementById("tahun");
const year = new Date();
tahun.textContent = year.getFullYear();
