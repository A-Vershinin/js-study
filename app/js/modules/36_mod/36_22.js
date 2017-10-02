/*
  Поменяйте содержимое всех <li> на их порядковый номер.
*/
function customFunctionTask22() {
  function customFunction() {
    $("li").each(function(index) {
      $(this).html(index);
    });
  }
  customFunction();
}

export default customFunctionTask22;

