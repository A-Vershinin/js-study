(function () {
  /*
  Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.
  */
  function customFunctionTask15() {
    function customFunction() {
      var target = document.querySelector("#elem");

      function changeCustom(target) {
        target.insertAdjacentHTML("beforeBegin", "<span>!!!</span>");
      }
      changeCustom(target);
    }
    customFunction();
  }

  window.task15 = customFunctionTask15;
}());

