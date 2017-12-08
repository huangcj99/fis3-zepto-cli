require('zepto');

const index = {
  showMask(text, comfirmBtnText, eventClass) {
    let $mask = $('.mask'),
        $popup = $('.popup');

    if ($mask.hasClass('hidden')) {

      $('.popup-text').html(text);
      $('.redirect').addClass(eventClass);
      $('.redirect').html(comfirmBtnText);
      $('.popup').removeClass('hidden');
      $mask.removeClass('hidden');

    } else {

      $('.redirect').removeClass('to-create-file');
      $('.redirect').removeClass('to-create-file');
      $('.popup').addClass('hidden');
      $mask.addClass('hidden');

    }

  }
}

module.exports = index;
