(function () {
  /*
  Повторите поведение кнопки по нажатию на нее: вывести алерт с текстом "Привет"
  после увода курсора с области
  */
  function customFunctionTask4() {
    function customFunction() {
      var elem = document.getElementById("area");

      elem.addEventListener("mouseout", function handler() {
        alert("Привет");
      }, false);
    }
    customFunction();
  }

  window.task4 = customFunctionTask4;
}());
