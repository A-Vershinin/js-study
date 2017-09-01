(function () {
  /*
  Повторите поведение кнопки по нажатию на нее: вывести алерт с текстом "Привет"
  по наведению на кнопку
  */
  function customFunctionTask2() {
    function customFunction() {
      var elem = document.getElementById("btn1");

      elem.addEventListener("mouseover", function handler() {
        alert("Привет");
      }, false);
    }
    customFunction();
  }

  window.task2 = customFunctionTask2;
}());
