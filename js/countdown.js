var countDownDate = new Date("October 01, 2021 00:00:00").getTime();
var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
});

// Navigation

window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

// hamburger


const menuBtn = document.querySelector(".menu-btn");
const listNav = document.querySelector(".list");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
        listNav.classList.add("open");
    }
    else {
        closeNav();
    }
});

function closeNav() {
    menuBtn.classList.remove("open");
    menuOpen = false;
    listNav.classList.remove("open");
}
