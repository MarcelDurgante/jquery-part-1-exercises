import $ from "jquery";

function exercise15() {
  // Complete the code of the function
  $('form').on('submit', function (event)
  {
    event.preventDefault();
    let nameInput = $('#name').val();
    let emailInput = $('#email').val();
    let allInputs =  nameInput+ ',' + ' ' +emailInput;
    $('form').append('<p>' + allInputs + '</p>');        
    
  });

}

export default exercise15;
