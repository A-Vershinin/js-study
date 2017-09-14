(function () {
  /*
  Дан элемент. Сделайте так, чтобы при клике на него и нажатой клавише Ctrl -
  в его текст записывалось '1', при нажатой клавише Alt - '2', а при нажатой клавише Shift - '3'.
  */
  function customFunctionTask6() {
    function customFunction() {
      var btn = document.querySelector("#btn1");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler(evt) {
          if (evt.ctrlKey) {
            this.value = "1";
          }
          if (evt.altKey) {
            this.value = "2";
          }
          if (evt.shiftKey) {
            this.value = "3";
          }
        }
      }
      changeCustom(btn);
    }
    customFunction();
  }

  window.task6 = customFunctionTask6;
}());

