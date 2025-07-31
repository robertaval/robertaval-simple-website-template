(function ($) {
  $(window).on('load hashchange', function () {
    const region = location.hash || '#home';

    // Hide all content and remove active class
    $('.content-region').removeClass('show');
    $('.main-menu .nav-link').removeClass('active');

    // Show the selected section and highlight nav
    $(region).addClass('show');
    $(`.main-menu .nav-link[href="${region}"]`).addClass('active');
  });

  // Trigger on load
  $(window).trigger('hashchange');
})(jQuery);
