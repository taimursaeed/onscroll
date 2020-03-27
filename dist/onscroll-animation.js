var defaultOffset = 100;

$(document).ready(function() {
  animateIntoView();
});
$(document).scroll(function() {
  animateIntoView();
});

function animateIntoView() {
  $("[data-animation]:not(.animate)").each(function() {
    if (isScrolledIntoView($(this)) && !$(this).hasClass("animate")) {
      $(this).css({
        transitionDelay: $(this).data("animation-delay") + "ms",
        transitionDuration: $(this).data("animation-speed") + "ms"
      });
      $(this).addClass("animate");

      // wait for css transition to complete
      $(this).on(
        "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",
        function() {
          $(this).css({ transitionDelay: "0s" });
        }
      );
    }
  });
}

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var offset = elem.data("animation-offset")
    ? elem.data("animation-offset")
    : defaultOffset;
  console.log(offset);
  var elemTop = $(elem).offset().top + offset;
  // if window reach bottom of the page {$(document).height() - docViewBottom < 0}
  return docViewBottom >= elemTop || $(document).height() - docViewBottom < 1;
}
