(function () {
  /*
  Дан элемент #elem с вертикальной полосой прокрутки.
  По нажатию на кнопку выведите реальную высоту элемента с учетом прокрутки
  */
  function customFunctionTask12() {
    function customFunction() {
      var btn = document.querySelector("#btn1");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var elem = document.querySelector(".list");
          console.log(elem.scrollHeight);
        }
      }
      // changeCustom(btn);
    }
    customFunction();
  }
  window.task12 = customFunctionTask12;
}());

