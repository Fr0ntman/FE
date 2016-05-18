const $ = require('jquery');
const menu = require('./menu');

$(() => {
  const $window = $(window);
  const scrollTop = {
    duration: 300,
    $button: $('#js-go-top'),
    toggleBtn() {
      if ($window.scrollTop() > 150) {
        this.$button.addClass('top_state_active');
      } else {
        this.$button.removeClass('top_state_active');
      }
    },

    scroll() {
      $('body, html').animate({scrollTop: 0}, this.duration);
    }
  };

  $window.scroll($.proxy(scrollTop, 'toggleBtn'));
  scrollTop.$button.on('click', $.proxy(scrollTop, 'scroll'));
  menu.init();
});


