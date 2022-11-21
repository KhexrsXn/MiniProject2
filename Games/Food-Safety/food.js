const buzzer = document.querySelectorAll("#buzz")
const bells = document.querySelectorAll("#bell")

//Audio
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

//End Audio

//HIDE FUNCTION
function hide1 () {
  var x = document.getElementById ("pics3");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none"
    }
  }
function hide2 () {
  var x = document.getElementById ("pics4");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none"
    }
  }
function hide3 () {
  var x = document.getElementById ("pics5");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none"
    }
  }
function hide4 () {
  var x = document.getElementById ("pics6");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none"
    }
  }
function hide5 () {
  var x = document.getElementById ("pics7");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none"
    }
  }
function hide6 () {
  var x = document.getElementById ("pics8");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none"
    }
  }
// END of HIDE FUNCTION