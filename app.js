const burger = document.querySelector(".burger");
const navLists = document.querySelector(".nav-list");
const lists = document.querySelectorAll(".nav-list li a");

burger.addEventListener("click", () => {
  navLists.classList.toggle("open");
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const searchBar = document.querySelector(".search-bar");
const searchIn = document.querySelector(".search-In input");

searchBar.addEventListener("click", () => {
  searchBar.classList.toggle("open");
  searchIn.classList.toggle("open");
});
