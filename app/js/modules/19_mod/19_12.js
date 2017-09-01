(function () {
  /*
  Повторите поведение: по клику на поле с типом submit поменять текст
  на "О, теперь на меня больше не нажимать!".
  */
  function customFunctionTask12() {
    function customFunction() {
      var btn = document.getElementById("btn2");
      var newValue = "О, теперь на меня больше не нажимать!";

      function someClick(elem) {
        function doClick(elem) {
          this.value = newValue;
          this.disabled = true;
        }

        elem.addEventListener("click", doClick);
      }
      someClick(btn);
    }
    customFunction();
  }

  window.task12 = customFunctionTask12;
}());
