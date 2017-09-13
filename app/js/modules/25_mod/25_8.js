(function () {
  /*
  Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку
  выведите на сколько элемент прокручен сверху.
  */
  function customFunctionTask8() {
    function customFunction() {
      var btn = document.querySelector("#link");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var elem = document.querySelector(".list");
          alert(elem.scrollTop);
        }
      }
      changeCustom(btn);
    }
    customFunction();
  }
  window.task8 = customFunctionTask8;
}());

