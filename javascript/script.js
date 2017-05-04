//Navigation effect
$(window).on('scroll', function () {
  var $scrollTop = $(window).scrollTop();
  if ($scrollTop > ($('header').height()/5)) {
    $('.navigation').addClass("nav-background");
  }
  if ($scrollTop < ($('header').height()/5)) {
    $('.navigation').removeClass("nav-background");
  }
});


$(window).on('scroll', function () {

  var p = $('.appear-1');
  var offset = p.offset().top;
  var scrollTop = $(window).scrollTop()
  if (scrollTop > (offset - window.outerHeight + 200)) {
    $( '.appear-1' ).addClass("make-visible");
  }
});

$(window).on('scroll', function () {

  var p = $('.appear-2');
  var offset = p.offset().top;
  var scrollTop = $(window).scrollTop()
  if (scrollTop > (offset - window.outerHeight + 200)) {
    $( '.appear-2' ).addClass("make-visible");
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
