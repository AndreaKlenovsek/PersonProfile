// Variables
const 
form = document.querySelector("form"),
right = document.querySelector(".right"),
images = ["photo-01.jpg", "photo-02.jpg"],
container = document.querySelector(".container"),
image = document.querySelector(".images img"),
ids = [document.getElementById("01"), document.getElementById("02")],
slideColor = document.querySelector(".slide__color"),
emailIcon = document.querySelector(".emailIcon"),
submitBtn = document.querySelector(".submitBtn"),
skillList = document.querySelector(".skill__list");

// Init
submitBtn.disabled = true;

// If previous btn clicked
const prevBtn = () => {
image.src = `img/${images[0]}`;
ids[0].style.color = "#bdc3c7";
ids[0].style.color = "#333";
slideColor.classList.add("leftSide");
slideColor.classList.remove("rightSide");
};
  
  // If next btn clicked
const nextBtn = () => {
image.src = `img/${images[1]}`;
ids[1].style.color = "#bdc3c7";
ids[1].style.color = "#333";
slideColor.classList.add("rightSide");
slideColor.classList.remove("leftSide");
};


container.addEventListener("click", (e) => {

// Toggle skill list
if(e.target.matches(".more__btn, .more__btn *")) {
skillList.classList.toggle("show");
// Previous button
} else if(e.target.matches("#prev, #prev *")) {
prevBtn();
// Next button
} else if(e.target.matches("#next, #next *")) {
nextBtn();
}
});


// Validation mail input
email.addEventListener("input", (e) => {
const email = document.querySelector("#email");

const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(regex.test(email.value)) {
submitBtn.disabled = false;
}
});


// Submit form animation
form.addEventListener("submit", (e) => {
e.preventDefault();
const divIcon = document.createElement("div");
divIcon.className = "emailIcon";
divIcon.innerHTML = `<i class="fas fa-envelope-open-text envelope"></i>`;
right.insertAdjacentElement("beforeend", divIcon);

setTimeout(() => {
divIcon.remove();
form.reset();
submitBtn.disabled = true;
}, 3000);
});


// Shorten text when resizing screen
window.addEventListener("resize", (e) => {
const html = "I am a freelance photographer in Seattle, WA. I love doing various personal creative projects and commercial gigs, like family portraits, event and corporate products, wedding etc. My biggest passion is travelling, where I can find the biggest source of inspiration, but also the biggest challenges."
if(window.innerWidth < 520 || document.documentElement.clientWidth < 520) {
document.querySelector(".right__text").textContent = `${html.substr(0, 200)} ...`
} else {
document.querySelector(".right__text").textContent = html;
}
});

