$("#header a").click(function(e){
  e.preventDefault();
  var toShow = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(toShow).offset().top
}, 1000);
    console.log(toShow)
});

$(".back-to-top").click(function(e){
  e.preventDefault();
  var toShow = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(toShow).offset().top
}, 500);
    console.log(toShow)
});
