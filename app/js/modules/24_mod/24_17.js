(function () {
  /*
  Дан элемент #elem. Вставьте ему в начало span с текстом '!!!'.
  */
  function customFunctionTask17() {
    function customFunction() {
      var target = document.querySelector("#elem");

      function changeCustom(target) {
        target.insertAdjacentHTML("afterBegin", "<span>!!!</span>");
      }
      changeCustom(target);
    }
    customFunction();
  }

  window.task17 = customFunctionTask17;
}());

