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

bells.forEach(button => button.addEventListener 
  ("click", () => {

    {
    var x = document.getElementById ("pics3");
      if (x.style.display === "none") {
        x.style.display = "block";
      }
      else {
        x.style.display = "none"
      }
    }
      
{

      var x1 = document.getElementById ("pics4");
        if (x1.style.display === "none") {
          x1.style.display = "block";
        }
        else {
          x1.style.display = "none"
        }
      }

        {
        var x1 = document.getElementById ("pics5");
          if (x1.style.display === "none") {
            x1.style.display = "block";
          }
          else {
            x1.style.display = "none"
          }
        }

        {
        var x1 = document.getElementById ("pics6");
          if (x1.style.display === "none") {
            x1.style.display = "block";
          }
          else {
            x1.style.display = "none"
          }
        }

        {
        var x1 = document.getElementById ("pics7");
          if (x1.style.display === "none") {
            x1.style.display = "block";
          }
          else {
            x1.style.display = "none"
          }
        }
        
        {
        var x1 = document.getElementById ("pics8");
          if (x1.style.display === "none") {
            x1.style.display = "block";
          }
          else {
            x1.style.display = "none"
          }
        }
} ));



