(function () {
  /*
  Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку
  прокрутите его до позиции 100px сверху.
  */
  function customFunctionTask10() {
    function customFunction() {
      var btn = document.querySelector("#link");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var elem = document.querySelector(".list");
          elem.scrollTop = 100;
        }
      }
      changeCustom(btn);
    }
    customFunction();
  }
  window.task10 = customFunctionTask10;
}());

