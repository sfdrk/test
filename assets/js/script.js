





AOS.init();



var swiper = new Swiper(".mySwiper", {
    speed: 1300,  
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper(".awardSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      200: {
        slidesPerView: 1.3,
      },
  
      500: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 2.5,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
  });


  // document.addEventListener('DOMContentLoaded', function() {

  // });


  $(document).ready(function(){



    // setTimeout( () => { 
    //   $(".project-head").addClass("fade-left");
    //   $(".sale-block").addClass("fade-left");
    //   $(".project-sub-head").addClass("fade-left");
    // },6500)



    // const video = document.getElementById("intro-video");
    // const videoContainer = document.getElementById("video-container");
    // // $("main").hide();
  
    // // Play the video
    // video.play().catch(function(error) {
    //   // Handle the error if autoplay is blocked by the browser
    //   console.log('Autoplay was prevented:', error);
    // });
  
    // // Event listener for when the video ends
    // video.onended = function() {
    //   gsap.to(videoContainer, {
    //     duration: 1.5,
    //     opacity: 0,
    //     // x: -2000, // Slide left by 100 pixels
    //     ease: "power3.out",
    //     onComplete: () => {
    //       // $("main").show();
    //       videoContainer.remove();
    //     }
    //   });
    // };

    // document.addEventListener("DOMContentLoaded", function() {
    //   const video = document.getElementById("intro-video");
    //   const videoContainer = document.getElementById("video-container");
    
    //   $("#intro-video").play();

    //   video.onended = function() {
    //     gsap.to(videoContainer, { duration: 1.5, opacity: 0,x: -100, ease: "power3.out", onComplete: () => {
    //       videoContainer.remove();
    //     }});
    //   };
    // });











    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('.footer-popup-section').show();
      } else {
          $('.footer-popup-section').hide();
      }
  });


  $('.dropdown').hover(function() {
    $(this).find('.dropdown-content').stop(true, true).slideDown('fast');
}, function() {
    $(this).find('.dropdown-content').stop(true, true).slideUp('fast');
});

$('.dropdown').click(function(event) {
    event.stopPropagation();
    $(this).find('.dropdown-content').toggle();
});

$(document).click(function() {
    $('.dropdown-content').slideUp('fast');
});



gsap.to(".landing-video", {
  // scale:1,
  width:"100%",
  scrollTrigger: {
    // scroller:"#mainContent",
    trigger:".landing-video",
    start: "top 80%", 
    end: "top 40%", 
    scrub: 1
  },
});


gsap.to(".inner-video", {
  // scale:1,
  width:"100%",
  scrollTrigger: {
    // scroller:"#mainContent",
    trigger:".inner-content-block",
    start: "top 80%", 
    // end: "top 40%", 
    scrub: 1
  },
  
});


var $modal = $("#myModal");

// When the user clicks the button, open the modal 
$(".download-btn").click(function() {
    var section = $(this).data("section");
    $("#section").val(section); // Store the section in the hidden input
    $modal.show();
});

// When the user clicks on <span> (x), close the modal
$(".close").click(function() {
    $modal.hide();
});

// When the user clicks anywhere outside of the modal, close it
$(window).click(function(event) {
    if ($(event.target).is($modal)) {
        $modal.hide();
    }
});


var lastScrollTop = 0;
var navbar = $('.header');
var mainLogo = $('.mainLogo');
var navbarHeight = navbar.outerHeight();
var originalLogoSrc = mainLogo.attr('src');
var smallLogoSrc = './assets/images/logos/logoblackv1.svg'; // Replace with the path to your smaller logo
// var smallLogoSrc = './assets/images/logos/logoblack.svg'; // Replace with the path to your smaller logo

$(window).scroll(function() {
  var st = $(this).scrollTop();
  
  if (st > lastScrollTop) {
    // Scrolling down
    navbar.removeClass('fixed').css('top', '-' + navbarHeight + 'px');
    mainLogo.attr('src', originalLogoSrc);
  } else {
    // Scrolling up
    if ($(this).scrollTop() > navbarHeight) {
      navbar.addClass('fixed').css('top', '0');
      mainLogo.attr('src', smallLogoSrc);
      $(".menu ul li a , .cl ").css("color","#232323");
      $(".bar").addClass("bg-cl");
      $(".header").addClass("shadow");
    //   $(".cl").css("color","#000");
    } else {
      navbar.removeClass('fixed').css('top', '0');
      mainLogo.attr('src', originalLogoSrc);
      $(".menu ul li a , .cl").css("color","#fff");
      $(".bar").removeClass("bg-cl");
      $(".header").removeClass("shadow");
    }
  }
  lastScrollTop = st;
});


function handleFormSubmit(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (username && email && phone) {
        const confirmation = confirm("Do you want to download the brochure?");
        if (confirmation) {
            window.location.href = './brochure.pdf'; // Replace with the path to your PDF
        }
    }
}


$(".hamburger").on("click", function() {
    $(".mob-main-nav").addClass("slide");
});

$(".close-btn").on("click", function() {
    $(".mob-main-nav").removeClass("slide");
})


var swiper = new Swiper(".historySwiper", {
  
  slidesPerView: 3,
  spaceBetween: 30,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
  watchSlidesVisibility: true,
  
  // swiper.on('slideChange',function)

  breakpoints: {
    200: {
      slidesPerView: 1.3,
      // spaceBetween: 20
    },

    500: {
      slidesPerView: 2,
      // spaceBetween: 20
    },
    600: {
      slidesPerView: 2.5,
      // spaceBetween: 20
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
});


var swiper = new Swiper(".gallerySlider", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(".video-call").on("click", function() {
  Calendly.initPopupWidget({ url: 'https://calendly.com/safdar-dxb070/30min' });
})


 // Show full view container by default
 $(".full-view-container").addClass("active");
            
 // Show Google Map
 $("#showGoogleMap").click(function(){
     $(".full-view-container, .site-map").removeClass("active");
     $(".responsive-map").addClass("active");
    //  alert("yo");

 });

 // Show Site Map
 $("#showSiteMap").click(function(){
     $(".full-view-container, .responsive-map").removeClass("active");
     $(".site-map").addClass("active");
 });



 $("#showHome").click(function(){
     $(".site-map, .responsive-map").removeClass("active");
     $(".full-view-container").addClass("active");
 });

 // Back to 360 view
 $("#backTo360").click(function(){
     $(".site-map, .responsive-map").removeClass("active");
     $(".full-view-container").addClass("active");
 });


 $("#getInTouchButton").click(function() {
  $(".popup-layer").toggle(); // Toggle the form visibility
  $(".mob-main-nav").removeClass("slide"); // Close the mobile menu
});


$(".popupform-close").click(function() {
  $(".popup-layer").toggle(); // Toggle the form visibility
});


$(".get-in-btn-mob").click(function() {
  $(".mob-main-nav").removeClass("slide"); // Close the mobile menu
  $(".popup-layer").toggle(); // Toggle the form visibility
});


});