$(document).ready(function() {
  $('.mobile-nav').on('click', function(){
    $('.navigation').toggleClass('show');
    $('.mobile-nav').html(function(i, label){
      return label === 'Menu' ? '&times; Close' : 'Menu'
    })
    $("body").toggleClass("prevent-scroll");
    $("header.main-header").toggleClass("prevent-scroll");
  });
});
