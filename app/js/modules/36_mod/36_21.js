/*
  Выведите консоль содержимое всех заголовков (по очереди).
*/
function customFunctionTask21() {
  function customFunction() {
    $("p").each(function(elem) {
      console.log($(this).html());
    });

  }
  customFunction();
}

export default customFunctionTask21;

