// /* 'keydown' is event-listner that connects keyboard and webpage */
// document.addEventListener("keydown", function (event) {
//   // 'event' returns properties of key that get pressed
//   // here 'event' is just a passing parameter variable that means it can be anything
//   // from 'event.key' => '.key' is one of that property,
//   // that returns which key is pressed and this return value is in string form
//   if (event.key === "1") {
//     alert("Key is pressed!!!");
//   }
// });

/* 
// this is how we can play sound
var audio = new Audio("sounds/crash.mp3");
// 'Audio' is constructor that takes file location as input and
// has lot of properties including '.play'
audio.play();
 */

/* this detects which image is pressed */
var btnLength = document.querySelectorAll(".drum").length;
for (let i = 0; i < btnLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // above statement works as address to the image clicked
    // console.log(this);

    // var btnInnerHTML = this.innerHTML;
    // makeSound(btnInnerHTML);

    makeSound(this.innerHTML);
  });
}

/* this plays sond on key pressed */
document.addEventListener("keydown", function (event) {
  // console.log(event);
  makeSound(event.key);
});

/* this assigns sound to the image or key pressed */
function makeSound(key) {
  var audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/kick.mp3");
      audio.play();
      break;

    default:
      console.log(key);
      break;
  }
}
