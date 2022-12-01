// for Account popup
const acnt = document.querySelector('.Account');
const heroSec = document.querySelector('.heroSec');
const gameSec = document.querySelector('.gameSec');
const testiSec = document.querySelector('.testiSec');
const partSec = document.querySelector('.partSec');

function accountPop(){
    acnt.classList.add("open-acnt");
    heroSec.classList.add("close-acnt");
    gameSec.classList.add("close-acnt");
    testiSec.classList.add("close-acnt");
    partSec.classList.add('close-acnt');
   
}
function Accointclose(){
    acnt.classList.remove("open-acnt");
    heroSec.classList.remove("close-acnt");
    gameSec.classList.remove("close-acnt");
    testiSec.classList.remove("close-acnt");
    partSec.classList.remove('close-acnt');
}


const forms = document.querySelector(".forms"),
passShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

passShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let passFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  passFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault();
 forms.classList.toggle("show-signup");
})
})
//-------Login Validation----------------
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];
var email_error = document.querySelector('#email_error')
var pass_error = document.querySelector('#pass_error');

email.addEventListener('input', email_Verify);
password.addEventListener('input', pass_Verify);

function validated(){
    if(email.value.length <= 5){
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.length <= 5){
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
}
function email_Verify(){
    if(email.value.length > 5){
        email_error.style.display = "none";
        return true;
    }  
}
function pass_Verify(){
    if(password.value.length > 5){
        pass_error.style.display = "none";
        return true;
    } 
}
//END LOGIN//

//CHAT BOT//
const toTop = document.querySelector(".chat-bot");

window.addEventListener("scroll", ()=>{
    if (window.pageYOffset > 1500){
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

const toTop2 = document.querySelector(".chat-bot-2");

window.addEventListener("scroll", ()=>{
    if (window.pageYOffset > 700){
        toTop2.classList.add("active");
    } else {
        toTop2.classList.remove("active");
    }
});
const toTop3 = document.querySelector(".chat-bot-3");

window.addEventListener("scroll", ()=>{
    if (window.pageYOffset > 300){
        toTop3.classList.add("active");
    } else {
        toTop3.classList.remove("active");
    }
});
//END CHAT BOT


//PARTNERS//
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover:false,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow:3
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 2
            }
        }]
    });
});



$(document).ready(function(){
    $('.customer-logos-testi').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        grabCursor:true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        pauseOnHover:false,
        
    });
});
//END PARTNERS