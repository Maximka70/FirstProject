$(function () {

  // ------------------------Rating-------------------------
  const stars = document.querySelectorAll(".star");
  const ratingText = document.getElementById("rating-score");
  let currentRating = 0;

  stars.forEach((star) => {
    star.addEventListener("mouseover", () => {
      const value = star.getAttribute("data-value");
      highlightStar(value);
    });

    star.addEventListener("mouseout", () => {
      highlightStar(currentRating);
    });

    star.addEventListener("click", () => {
      currentRating = star.getAttribute("data-value");
      ratingText.textContent = `${currentRating}/5`;
    });
  });

  function highlightStar(rating) {
    stars.forEach((star) => {
      if (star.getAttribute("data-value") <= rating) {
        star.classList.add("hover");
      } else {
        star.classList.remove("hover");
      }
    });
  };

  // --------------------------Burger Menu-------------------------





  // setInterval(() => {
  //   if ($(window).scrollTop() > 0 && !$('.header__nav').hasClass('header__nav--open')) {
  //     $('.burger').addClass('burger--follow')
  //   } else {
  //     $('.burger').removeClass('burger--follow')
  //   }
  // }, 0);

  $(window).on('scroll', function() {
  if ($(window).scrollTop() > 0 && !$('.header__nav').hasClass('header__nav--open')) {
    $('.burger').addClass('burger--follow');
  } else {
    $('.burger').removeClass('burger--follow');
  }
});

  $('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.header__nav').toggleClass('header__nav--open')
    $('.burger').toggleClass('burger--close')
    $('.overlay').toggleClass('overlay--show')
  })

  // -----------------------------Blog--------------------------

  var mixer = mixitup('.blog__list');

  $('.blog__filter-btn').on('click', function () {
    $('.blog__filter-btn').removeClass('blog__filter-btn--active')
    $(this).addClass('blog__filter-btn--active')
  })

  // --------------------------------Slider-----------------------
  $('.opinions__slider').slick({
    arrows: false,
    infinite: true,
    draggable: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    waitForAnimate: false,
    appendDots: $('.opinions__dots'),
  })

  $('.opinions__slider-prew').on('click', function (e) {
    e.preventDefault()
    $('.opinions__slider').slick('slickPrev')
  })
  $('.opinions__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.opinions__slider').slick('slickNext')
  })


  // --------------------------Accordeon-------------------------
  $('.questions__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('questions__acc-link--active')) {
      $(this).removeClass('questions__acc-link--active')
      $(this).children('.questions__acc-text').slideUp()
    }
    else {
      $('.questions__acc-link').removeClass('questions__acc-link--active')
      $('.questions__acc-text').slideUp()
      $(this).addClass('questions__acc-link--active')
      $(this).children('.questions__acc-text').slideDown()
    }
  })


})
