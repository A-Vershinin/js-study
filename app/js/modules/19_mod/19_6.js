(function () {
  /*
  Повторите поведение кнопки по нажатию на нее: поменять текст внутри поля по клику на кнопку
  */
  function customFunctionTask6() {
    function customFunction() {
      var elem = document.getElementById("btn1");
      var field = document.getElementById("field");


      elem.addEventListener("click", function handler() {
        field.value = "текст другой";
      }, false);
    }
    customFunction();
  }

  window.task6 = customFunctionTask6;
}());
