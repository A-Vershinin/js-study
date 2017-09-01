(function () {
  /*
  Повторите страницу по данному по образцу:
  дана кнопка и 5 абзацев, при нажатии на кнопку поменять текст у всех абзацев
  */
  function customFunctionTask5() {
    function customFunction() {
      var btn = document.getElementById("btn-big");
      var textBlock = document.getElementsByClassName("some-text");

      function chengeCustom(btn, textBlock) {
        function someHandler() {
          var i;
          for (i = 0; i <= textBlock.length; i++) {
            textBlock[i].innerHTML = "Другой текст";
          }
        }
        btn.addEventListener("click", someHandler);
      }
      chengeCustom(btn, textBlock);
    }
    customFunction();
  }

  window.task5 = customFunctionTask5;
}());
