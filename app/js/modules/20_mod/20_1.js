(function () {
  /*
  Повторите страницу по данному по образцу:
  дана кнопка и абзац с текстом, при нажатии на кнопку текст в абзаце
  поменяется на другой и одно слово выделяется жирным(замена тегов).
  */
  function customFunctionTask() {
    function customFunction() {
      var btn = document.getElementById("btn-big");
      var text = document.getElementById("title");

      function chengeCustom(btn, text) {
        function someHandler() {
          text.innerHTML = "А я <b>жирный</b> троль";
        }
        btn.addEventListener("click", someHandler);
      }
      // chengeCustom(btn, text);
    }
    customFunction();
  }

  window.task1 = customFunctionTask;
}());
