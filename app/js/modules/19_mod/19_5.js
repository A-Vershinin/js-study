(function () {
  /*
  Повторите поведение кнопки по нажатию на нее: вывести алерт с текстом, которое внутри поля
  по клику на кнопку
  */
  function customFunctionTask5() {
    function customFunction() {
      var elem = document.getElementById("btn1");
      var field = document.getElementById("field");


      elem.addEventListener("click", function handler() {
        alert(field.value);
      }, false);
    }
    customFunction();
  }

  window.task5 = customFunctionTask5;
}());
