var btnLength = document.querySelectorAll(".drum").length;
for (let i = 0; i < btnLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    btnAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  btnAnimation(event.key);
});

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

function btnAnimation(keyPressed) {
  var activeBTN = document.querySelector("." + keyPressed);
  activeBTN.classList.add("pressed");

  setTimeout(function () {
    activeBTN.classList.remove("pressed");
  }, 500);
}
