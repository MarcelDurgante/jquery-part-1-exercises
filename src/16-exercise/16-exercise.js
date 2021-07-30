import $ from "jquery";

function exercise16()
{
  // Complete the code of the function

  $('form').on('submit', (function (event)
  {
    event.preventDefault();
    
    $('form').after('<p>Message Sent!</p>');
  }));
    
}


export default exercise16;
