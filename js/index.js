//video pose code home page
document.addEventListener('DOMContentLoaded', function () {
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));

  myModal._element.addEventListener('hidden.bs.modal', function () {
    var video = document.getElementById('play_video');
    video.pause();
  });
});

//support FAQ sec
$(document).ready(function () {
  $('.accordion-collapse').on('shown.bs.collapse', function () {
    $(this).closest('.accordion-item').addClass('active');
  });

  $('.accordion-collapse').on('hidden.bs.collapse', function () {
    $(this).closest('.accordion-item').removeClass('active');
  });
});

//blog page filter
document.addEventListener('DOMContentLoaded', (event) => {
  const toggleButton = document.querySelector('.fliter-icon');
  const textElements = document.querySelectorAll('.mob_blog_post_flitters');

  toggleButton.addEventListener('click', () => {
      textElements.forEach(element => {
          element.classList.toggle('active');
      });
  });
});

//fixed header js
const header = document.querySelector(".nalanda-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 50) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});

//abstrack meet the team slider
const images = document.querySelectorAll(".team_img")

function clearActiveImage() {
    images.forEach(function(image) {
        image.classList.remove("active");
    });
}

images.forEach(function(image, index) {
    image.onclick = function () {
        event.stopPropagation() 
        if(images[index].classList.contains("active")){
            images[index].classList.remove("active")
        } else {
            clearActiveImage(index)
            images[index].classList.add("active")
        }
    }
})

window.addEventListener("click", () => {
    clearActiveImage()
})


 //=== meet_team_slick-slider ===
 $(document).ready(function(){
    $('.meet_team_slick-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      dots: false
    });
  });


//=== updates_slick_slider ===
  $(document).ready(function(){
    $('.updates_slick_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      dots: false
    });
  });


  //=== degital nalanda page slider ===
$(document).ready(function(){
  $('.digital_nalanda_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false
  });
});

//banner slider
$(document).ready(function(){
  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true
  });
});
//==== testimonial slider ===

$(document).ready(function () {
  var lastSlideIndex = $('.slider-for .testimonial-slide').length - 1;

  $('.slider-for').slick({
    slidesToShow: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrow: true,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
  });
});

// === animation function ===
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      var animation = reveals[i].getAttribute("data-animation");
      reveals[i].classList.add("animate__animated", "animate__" + animation);
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("animate__animated");
      reveals[i].classList.remove("animate__" + animation);
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

//===== Workshop slider on sanghmitra collec js =====

$(document).ready(function () {
  // Slick slider initialization code here
  $('.workshop_slider').slick({
      centerMode: true,
      centerPadding: '320px',
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      dots: false,
      arrow: true,
      responsive: [
          {
              breakpoint: 991,
              settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '150px',
                  slidesToShow: 1
              }
          },
          {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '120px',
                slidesToShow: 1
            }
        },
          {
              breakpoint: 480,
              settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
              }
          }
      ]
  });

});

//===== Round slider js =====

const container = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.cricle-slide');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

const n = slides.length;
const angle = 360 / n;
let currentSlide = 0;
let setId = 0;
let deg = [];
let x = 0;
let y = 0;

const setTransition = (time) => {
  for (let i = 0; i < n; i++) {
    slides[i].style.transition = `all ${time}s`;
  }
};

const positionSlides = () => {
  const r = container.offsetWidth / 2;

  setTransition('0');

  for (let i = 0; i < n; i++) {
    deg[i] = i * angle;
    x = Math.cos(deg[i] * (Math.PI / 180)) * r + r;
    y = Math.sin(deg[i] * (Math.PI / 180)) * r + r;

    slides[i].style.top = `${~~y}px`;
    slides[i].style.left = `${~~x}px`;
  }

  setTimeout(() => {
    setTransition('.3');
  }, 10);
};

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + n) % n;
  animateSlide();
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % n;
  animateSlide();
};

const animateSlide = () => {
  const r = container.offsetWidth / 2;

  for (let i = 0; i < n; i++) {
    deg[i] = (i - currentSlide) * angle;
    x = Math.cos(deg[i] * (Math.PI / 180)) * r + r;
    y = Math.sin(deg[i] * (Math.PI / 180)) * r + r;

    slides[i].style.top = `${~~y}px`;
    slides[i].style.left = `${~~x}px`;

    y === 0 ? slides[i].classList.add('active') : slides[i].classList.remove('active');
  }

  const activeSlide = document.querySelector('.cricle-slide.active');
  if (activeSlide) {
    const slideBgImg = getComputedStyle(activeSlide).backgroundImage;
    container.style.backgroundImage = slideBgImg;
  }
};

positionSlides();
animateSlide();

btnPrev.addEventListener('click', prevSlide);
btnNext.addEventListener('click', nextSlide);

slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    currentSlide = index;
    animateSlide();
  });
});

// Autoplay functionality
const autoplay = () => {
  setId = setInterval(() => {
    prevSlide(); 
  }, 3000);
};

autoplay();
