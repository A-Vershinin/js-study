(function () {
  /*
  Дана страница с горизонтальной и вертикальной полосами прокрутки. По нажатию
  на кнопку прокрутите ее в точку 300px слева, 500px сверху.
  */
  function customFunctionTask17() {
    function customFunction() {
      var btn = document.querySelector("#btn1");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          window.scrollTo(300, 500);
        }
      }
      changeCustom(btn);
    }
    customFunction();
  }
  window.task17 = customFunctionTask17;
}());

