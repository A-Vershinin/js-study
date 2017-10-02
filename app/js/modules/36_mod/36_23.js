/*
  Добавьте всем <li> в конец их порядковый номер.
*/
function customFunctionTask23() {
  function customFunction() {
    $("li").each(function(index) {
      $(this).append(index);
    });
  }
  customFunction();
}

export default customFunctionTask23;

