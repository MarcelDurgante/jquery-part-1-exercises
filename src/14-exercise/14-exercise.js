import $ from "jquery";

function exercise14() {
  // Complete the code of the function

  

  $('form').on('submit', function (event)
  {
    event.preventDefault();

    let nameValue = $('#name').val();
		let emailValue = $('#email').val();

    if (nameValue === '' || emailValue === '') {
      
      $('form').append('<p>The values are empty</p>');
  }
    });
 
}

export default exercise14;
