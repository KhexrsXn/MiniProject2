const buzzer = document.querySelectorAll("#buzz")
const bells = document.querySelectorAll("#bell")
const openWindows= document.querySelectorAll("#openWindow")
const closeWindows= document.querySelectorAll("#CloseWindow")

buzzer.forEach(button => button.addEventListener 
  ("click", () => {

    let audio = new Audio("pictures/buzz.wav");
    audio.play()

} ));

bells.forEach(button => button.addEventListener 
  ("click", () => {

    let audio = new Audio("pictures/bell.wav");
    audio.play()

} ));




