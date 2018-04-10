/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function () {

  // 回到上面按鈕
  $('#top_btn').click (function () {
      $('html, body').animate ({ scrollTop: 0 }, 'slow');
  });

});