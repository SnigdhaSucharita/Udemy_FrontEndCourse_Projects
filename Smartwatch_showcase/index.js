var image = document.getElementById("smartwatch");
var black = document.getElementById("black-color");
var red = document.getElementById("red-color");
var blue = document.getElementById("blue-color");
var purple = document.getElementById("purple-color");
var clock = document.getElementById("clock");
var heartRate = document.getElementById("heart-rate");
var timeBtn = document.getElementById("time-btn");
var heartRateBtn = document.getElementById("heartrate-btn");


black.addEventListener("click", function() {
    image.src = "https://i.imgur.com/iOeUBV7.png";
});

red.addEventListener("click", function() {
    image.src = "https://i.imgur.com/PTgQlim.png";
});

blue.addEventListener("click", function() {
    image.src = "https://i.imgur.com/Mplj1YR.png";
});

purple.addEventListener("click", function() {
    image.src = "https://i.imgur.com/xSIK4M8.png";
});

timeBtn.addEventListener("click", function() {
    heartRate.classList.add("hide");
    clock.classList.remove("hide");
    clock.classList.add("show");
});

heartRateBtn.addEventListener("click", function() {
    clock.classList.add("hide");
    heartRate.classList.remove("hide");
    heartRate.classList.add("show");
});





