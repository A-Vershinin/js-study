(function () {
  /*
 Дан элемент #elem с горизонтальной полосой прокрутки. По нажатию
 на кнопку выведите на сколько элемент прокручен слева.
  */
  function customFunctionTask9() {
    function customFunction() {
      var btn = document.querySelector("#link");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var elem = document.querySelector(".list");
          alert(elem.scrollLeft);
        }
      }
      // changeCustom(btn);
    }
    customFunction();
  }
  window.task9 = customFunctionTask9;
}());

