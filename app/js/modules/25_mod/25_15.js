(function () {
  /*
  Дана страница с вертикальной полосой прокрутки. По нажатию на
  кнопку узнайте на сколько страница прокручена по вертикали.
  */
  function customFunctionTask15() {
    function customFunction() {
      var btn = document.querySelector("#btn1");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          console.log(window.pageYOffset);
        }
      }
      changeCustom(btn);
    }
    customFunction();
  }
  window.task15 = customFunctionTask15;
}());

