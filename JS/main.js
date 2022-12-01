// for Account popup
const acnt = document.querySelector('.Account');
const container = document.querySelector('.container');
const heroSection = document.querySelector('.heroSection');
const testimonial = document.querySelector('.testimonial');
const partners = document.querySelector('.partners');
const navham = document.querySelector('.navham');

function accountPop(){
    acnt.classList.add("open-acnt");
    container.classList.add("close-acnt");
    heroSection.classList.add("close-acnt");
    testimonial.classList.add("close-acnt");
    partners.classList.add("close-acnt");
    navham.classList.add("navham");
}

function Accointclose(){
    acnt.classList.remove("open-acnt");
    container.classList.remove("close-acnt");
    heroSection.classList.remove("close-acnt");
    testimonial.classList.remove("close-acnt");
    partners.classList.remove("close-acnt");
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
const toTop = document.querySelector("#chat-bot");

window.addEventListener("scroll", ()=>{
    if (window.pageYOffset > 700){
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

const toTop2 = document.querySelector("#chat-bot-2");

window.addEventListener("scroll", ()=>{
    if (window.pageYOffset > 1500){
        toTop2.classList.add("active");
    } else {
        toTop2.classList.remove("active");
    }
});
// const toTop3 = document.querySelector(".chat-bot-3");

// window.addEventListener("scroll", ()=>{
//     if (window.pageYOffset > 300){
//         toTop3.classList.add("active");
//     } else {
//         toTop3.classList.remove("active");
//     }
// });
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