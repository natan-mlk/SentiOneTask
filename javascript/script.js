//Navigation effect
$(window).on('scroll', function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > $('header').height()) {
    $('.navigation').addClass("nav-background");
  }
  if (scrollTop < $('header').height()) {
    $('.navigation').removeClass("nav-background");
  }
});

//Form validation

