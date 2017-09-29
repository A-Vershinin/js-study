(function () {
  /*
  Повторите поведение кнопки по нажатию на нее: вывести алерт с текстом "Привет"
  по дабл-клику по кнопке
  */
  function customFunctionTask3() {
    function customFunction() {
      var elem = document.getElementById("btn1");

      elem.addEventListener("dblclick", () => {
        alert("Привет");
      }, false);
    }
    customFunction();
  }

  window.task3 = customFunctionTask3;
}());
