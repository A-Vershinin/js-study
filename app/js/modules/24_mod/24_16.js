(function () {
  /*
  Дан элемент #elem. Вставьте после него span с текстом '!!!'
  */
  function customFunctionTask16() {
    function customFunction() {
      var target = document.querySelector("#elem");

      function changeCustom(target) {
        target.insertAdjacentHTML("afterEnd", "<span>!!!</span>");
      }
      changeCustom(target);
    }
    customFunction();
  }

  window.task16 = customFunctionTask16;
}());

