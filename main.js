const hand = document.querySelector(".hand")
const minuteHand = document.querySelector(".minute")
const hourHand = document.querySelector(".hour")

//getting current time
let time = new Date();
let seconds = time.getSeconds();
let minutes = time.getMinutes();
let hours = time.getHours();

console.log(time)
console.log(seconds)
console.log(minutes)
console.log(hours)

//setting start position of second hand based on current time
let rotation = 6 * seconds;
hand.style.transform = `rotate(${rotation}deg)`;

//set initial position of minute hand
let minRotate = 6 * (minutes + (seconds/60))
minuteHand.style.transform = `rotate(${minRotate}deg)`;

//set initial position of hour hand
let hourRotate = 30 * (hours + (minutes/60))
hourHand.style.transform = `rotate(${hourRotate}deg)`;

//moving second hand on 6deg every second
setInterval (function() {
rotation += 0.6;
hand.style.transform = `rotate(${rotation}deg)`;
}, 100)

//move minute hand
setInterval (function() {
    minRotate += 0.1;
    minuteHand.style.transform = `rotate(${minRotate}deg)`;
    }, 1000)

//move hour hand
setInterval (function() {
    hourRotate += 0.00030;
    hourHand.style.transform = `rotate(${hourRotate}deg)`;
    }, 36)

    //Test new branch