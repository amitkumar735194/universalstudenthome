 



 
 // -new-start-bookin-page-28-8-24=========================


 $("body").css("paddingTop", $(".navbar").innerHeight());

$(function () {
  $(".navbar li a").click(function (e) {
    "use strict";
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top + 1,
      },
      1000
    );
  });

  // Add Active Class on Navbar Link and Remove from the Siblings(if any exist!)

  $(".navbar li a").click(function () {
    // $(".navbar a").removeClass("active");
    // $(this).addClass("active");

    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");
  });

  // Sync Navbar Links With Sections

  $(window).scroll(function () {
    $(".block").each(function () {
      if ($(window).scrollTop() >= $(this).offset().top) {
        var blockId = $(this).attr("id");
        $(".navbar a").removeClass("active");
        $('.navbar li a[data-scroll="' + blockId + '"]').addClass("active");
      }
    });
  });
});




// new=13:36

jQuery(function ($) {
    $(document).ready(function() {
        function becomeSticky(el, padding) {
            if (el.length) {
                el.sticky({
                    topSpacing: padding
                });
            }
        }
        becomeSticky($("#eight-day-sticky-section"), 0);
    });
});

jQuery(function ($) {
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        $('.tour-details-section').each(function (i) {
            var topPos = $(this).offset().top;
            if ((topPos - scrollPos) <= 80) {
                $('.tour-details-section-active').removeClass('tour-details-section-active')
                $('#eight-day-sticky-section .active-highlight').eq(i).addClass('tour-details-section-active')
            }
        })
    });
});

$("#change-button").click(function() {
  $(".outer-container").toggleClass( "active" );
});












const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
  let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});




// time-range

 
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
 var slider = document.getElementById("myWalkin");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
 

// time-range



