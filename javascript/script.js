//Navigation effect
$(window).on('scroll', function () {
  var $scrollTop = $(window).scrollTop();
  if ($scrollTop > $('header').height()) {
    $('.navigation').addClass("nav-background");
  }
  if ($scrollTop < $('header').height()) {
    $('.navigation').removeClass("nav-background");
  }
});

//Form validation




$('.sign-up').submit(function (event) {
  event.preventDefault();
  var $email = $('input[name="email"]').val();
  console.log(validate($email))



/*  if (!validate($email)) {
    $('.form-control').addClass('input-error');
    $('.mail-error').removeClass('hide-me');
  }*/
});


function validate(email) {
  var pattern = /^\S+@\S+[\.][0-9a-z]+$/;
  return pattern.test(email);
}


/*

$('input[name="email"]').focusin(function () {
  $('.mail-error').fadeOut();
  $('.form-control').removeClass('input-error');
});*/
