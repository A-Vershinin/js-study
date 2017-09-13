(function () {
  /*
  Дана страница с горизонтальной полосой прокрутки. По
  нажатию на кнопку узнайте на сколько страница прокручена по горизонтали.
  */
  function customFunctionTask16() {
    function customFunction() {
      var btn = document.querySelector("#btn1");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          console.log(window.pageXOffset);
        }
      }
      changeCustom(btn);
    }
    customFunction();
  }
  window.task16 = customFunctionTask16;
}());

