(function () {
  /*
   Дан элемент #elem. Вставьте ему в конец span с текстом '!!!'.
  */
  function customFunctionTask18() {
    function customFunction() {
      var target = document.querySelector("#elem");

      function changeCustom(target) {
        target.insertAdjacentHTML("beforeEnd", "<span>!!!</span>");
      }
      changeCustom(target);
    }
    customFunction();
  }

  window.task18 = customFunctionTask18;
}());

