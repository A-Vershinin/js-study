(function () {
  /*
 Дан элемент #elem с вертикальной полосой прокрутки.
 По нажатию на кнопку прокрутите его до позиции 100px от нижнего края элемента.
  */
  function customFunctionTask14() {
    function customFunction() {
      var btn = document.querySelector("#btn1");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var elem = document.querySelector(".list");
          var targetHeight = elem.scrollHeight - 100;
          elem.scrollTop = targetHeight;
        }
      }
      changeCustom(btn);
    }
    customFunction();
  }
  window.task14 = customFunctionTask14;
}());

