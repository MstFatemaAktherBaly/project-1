// tooltip js start
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// tooltip js end

// banner slick js start


// banner slick js end

//new arrivals slick js start
$(function () {
  'use strict';
  $('.new_prdct_slider').slick({
    slidesToShow:4,
    prevArrow:'<i class="fa-solid fa-chevron-left product_slider_icon"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right product_slider_icon"></i>'
  });
})
//new arrivals slick js end

// countdown js start
$('#deals_countdown').countdown('2027/12/31', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<div class="cuntdown_item"><h3>%d</h3><p>Days</p></div> '
      + ' <span>:</span> '
      + ' <div class="cuntdown_item"><h3>%H</h3><p>Hour</p></div> '
      + ' <span>:</span> '
      + '<div class="cuntdown_item"><h3>%M</h3><p>Minute</p></div> '
      + ' <span>:</span> '
      + ' <div class="cuntdown_item"><h3>%S</h3><p>Sec</p></div>'));
  });
//   countdown js end

