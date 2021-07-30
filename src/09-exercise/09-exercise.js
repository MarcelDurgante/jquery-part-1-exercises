import $ from "jquery";

function exercise09() {
  // Complete the code of the function

  $('img').attr('src', $('img').attr('data-lazy'))
  $('img').removeAttr('data-lazy')
  $('img').removeData('data-lazy')


  // OR THE BELOW

  /* $('img').attr('src', $('img').data('lazy')
  $('img').removeAttr('data-lazy')
  $('img').removeData('lazy') */
}



export default exercise09;
