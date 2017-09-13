(function () {
  /*
  Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку
  прокрутите его на 100px вниз от текущего положения
  */
  function customFunctionTask11() {
    function customFunction() {
      var btn = document.querySelector("#link");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var elem = document.querySelector(".list");
          elem.scrollTop += 100;
        }
      }
      // changeCustom(btn);
    }
    customFunction();
  }
  window.task11 = customFunctionTask11;
}());

