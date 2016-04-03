const $ = require('jquery');

$(() => {
  $('.js-news-container').hover(
    function () {
      const $title = $('.js-news-title', this);
      const $date = $(this).parent().find('.js-news-date');
      const topBound = $date.offset().top + $date.innerHeight() + 15; // 15px вниз от даты
      const titleTop = $title.offset().top;

      $(this).css('transform', `translateY(-${titleTop - topBound}px)`);
    },
    function () {
      $(this).css('transform', 'translateY(0)');
    }
  );
});
