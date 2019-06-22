function main(){
  $('.container').hide();
  $('.container').fadeIn(1000);
  $('#ct').hide();
  $('#bio').hide();
  $('#music').hide();
 $('#ct-btn').on('click', function(){
    $('#ct').slideToggle(200);
  });
  $('#bio-btn').on('click', function(){
    $('#bio').slideToggle(200);
  });
  $('#ms-btn').on('click', function(){
    $('iframe').slideToggle(200);
  });
  
}
$(document).ready(main);

$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
	