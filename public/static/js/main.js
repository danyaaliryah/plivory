
setTimeout(function(){
	$('.loader_bg').fadeToggle();
},1200);

    /*START MENU JS*/
    $(window).on('scroll', function() {
        if ($(".navbar").offset()) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });


    //********** menu hides after click (mobile menu)

    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
       }
    });

    /*$('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });*/


    //************ smooth scroll js

    $('a.smooth-menu').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 3000);
    });

    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 10
        }, 3000, 'easeInOutExpo');
        event.preventDefault();
    });

function displayMenu(event) {
    if (document.getElementById("navbar-list").classList.contains("show")) {
        document.getElementById("navbar-list").classList.remove("show")
    }
    else {
        document.getElementById("navbar-list").classList.add("show")
    }
}


//contact

const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phone"]');
const messageInput = document.querySelector("textarea[name='message']");
const thankyou = document.querySelector(".thank-you");
nameInput.isValid = () => !!nameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);

messageInput.isValid = () => !!messageInput.value;

const inputFields = [nameInput, emailInput, phoneInput, messageInput];

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};


let shouldValidate = false;
let isFormValid = false;


const resetElm = (elm) =>{
  elm.classList.remove("invalid");
  elm.nextElementSibling.classList.add("hidden");
};
const invalidateElm = (elm) =>{
  elm.classList.add("invalid");
  elm.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {
  isFormValid = true;
  resetElm(nameInput);
  resetElm(emailInput);
  if (!nameInput.value){
   isFormValid = true;
   invalidateElm(nameInput)

  }
   if (!emailInput.value){
      isFormValid = false;
      invalidateElm(emailInput);

  }
};






form.addEventListener("submit", (e) => {
  e.preventDefault();

    form.remove();
    thankyou.classList.remove("hidden");

});

