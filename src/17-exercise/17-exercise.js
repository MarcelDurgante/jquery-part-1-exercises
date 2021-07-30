import $ from "jquery";

function exercise17() {
  // Complete the code of the function
  let li = $("ul").children();
    
  li.each(function (element)
  {
    li.css('font-weight', 'bold');
    })
 

}

export default exercise17;
