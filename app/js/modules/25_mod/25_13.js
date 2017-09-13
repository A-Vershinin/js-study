(function () {
  /*
  Дан элемент #elem с горизонтальной полосой прокрутки.
  По нажатию на кнопку выведите реальную ширину элемента с учетом прокрутки.
  */
  function customFunctionTask13() {
    function customFunction() {
      var btn = document.querySelector("#btn1");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var elem = document.querySelector(".list");
          console.log(elem.scrollWidth);
        }
      }
      changeCustom(btn);
    }
    customFunction();
  }
  window.task13 = customFunctionTask13;
}());

