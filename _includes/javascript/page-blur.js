$(function() {
  var pageTitle = $("title").text();

  $(window).blur(function() {
    $("title").text("🕶");
  });

  $(window).focus(function() {
    $("title").text(pageTitle);
  });
});
