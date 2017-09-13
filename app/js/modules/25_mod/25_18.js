(function () {
  /*
  Дана страница с вертикальной полосой прокрутки. По нажатию
  на кнопку прокрутите на 300px вниз от текущего положения
  */
  function customFunctionTask18() {
    function customFunction() {
      var btn = document.querySelector("#btn1");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          window.scrollBy(0, 300);
        }
      }
      changeCustom(btn);
    }
    customFunction();
  }
  window.task18 = customFunctionTask18;
}());

