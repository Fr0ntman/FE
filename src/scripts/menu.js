const $ = require('jquery');

module.exports = (() => {
  const $menuToggle = $('.js-menu-toggle');
  const $mainContainer = $('.js-main');

  return {
    init() {
      $menuToggle.on('click', () => {
        console.log('click');
        $mainContainer.toggleClass('main_menu_open');
      });
    }
  };
})();
