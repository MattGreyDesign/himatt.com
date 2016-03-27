// $(document).ready(function() {
//   $(".mobile-nav").on('click', function(){
//     $(".mobile-dropdown").slideToggle(100);
//   });
// });

$(document).ready(function() {
  $(".mobile-nav").on('click', function(){
    $(".mobile-dropdown").toggleClass('show');
    $('.mobile-nav').html(function(i, label){
      return label === 'Menu' ? '&times; Close' : 'Menu'
    })
  });
});
