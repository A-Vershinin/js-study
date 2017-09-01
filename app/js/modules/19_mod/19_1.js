(function () {
  /*
  Повторите поведение кнопки по нажатию на нее: вывести алерт по клику с текстом "Привет"
  */
  function customFunctionTask() {
    function customFunction() {
      var elem = document.getElementById("btn1");

      elem.addEventListener("click", function () {
        alert("Привет");
      }, false);
    }
    customFunction();
  }

  window.task1 = customFunctionTask;
}());
