$(function () {
  // при нажатии на кнопку scrollup
  $('.scrollup').click(function () {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  })
});
// при прокрутке окна (window)
$(window).scroll(function () {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop() > 200) {
    // то сделать кнопку scrollup видимой
    $('.scrollup').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scrollup').fadeOut();
  }
});

$(document).ready(function () {
  $("#top__button").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});

function myFunction(x) {
  x.classList.toggle("change");
}


$(document).ready(function () {
  $('.header__burger').click(function(event){
    $('.header__burger, .header__menu').toggleClass('active');
  });
});