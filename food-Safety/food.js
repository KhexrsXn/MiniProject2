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

function toggle(){
var x = document.getElementById ("pics3");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none"
  }
}

function toggle1(){
var x1 = document.getElementById ("pics4");
  if (x1.style.display === "none") {
    x1.style.display = "block";
  }
  else {
    x1.style.display = "none"
  }
}
function toggle2(){
var x1 = document.getElementById ("pics5");
  if (x1.style.display === "none") {
    x1.style.display = "block";
  }
  else {
    x1.style.display = "none"
  }
}
function toggle3(){
var x1 = document.getElementById ("pics6");
  if (x1.style.display === "none") {
    x1.style.display = "block";
  }
  else {
    x1.style.display = "none"
  }
}
function toggle4(){
var x1 = document.getElementById ("pics7");
  if (x1.style.display === "none") {
    x1.style.display = "block";
  }
  else {
    x1.style.display = "none"
  }
}
function toggle5(){
var x1 = document.getElementById ("pics8");
  if (x1.style.display === "none") {
    x1.style.display = "block";
  }
  else {
    x1.style.display = "none"
  }
}



