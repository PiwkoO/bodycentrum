const btns = document.querySelectorAll(".fas");
const menu = document.querySelector(".burger");
const divs = document.querySelectorAll(".burger a");

function addClass() {
   menu.classList.toggle("active");
}

function removeClass() {
   menu.classList.remove("active");
}

btns.forEach(function (btn) {
   btn.addEventListener('click', addClass)
})

divs.forEach(function (div) {
   div.addEventListener('click', removeClass)
})
