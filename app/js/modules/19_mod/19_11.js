(function () {
  /*
  Повторите поведение: по клику на поле с типом submit поменять текст
  на "Ку ку".
  */
  function customFunctionTask11() {
    function customFunction() {
      var btn = document.getElementById("btn2");
      var newValue = "Ку ку";

      function someClick(elem) {
        function doClick(elem) {
          this.value = newValue;
        }

        elem.addEventListener("click", doClick);
      }
      someClick(btn);
    }
    customFunction();
  }

  window.task11 = customFunctionTask11;
}());
