(function () {
  /*
  Дана кнопка. По нажатию на эту кнопку узнайте, есть ли у окна браузера вертикальная прокрутка.
  */
  function customFunctionTask3() {
    function customFunction() {
      var btn = document.querySelector("#link");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          if (window.pageYOffset > 0) {
            console.log(window.pageYOffset);
          }
        }
      }
      // changeCustom(btn);
    }
    customFunction();
  }

  window.task3 = customFunctionTask3;
}());

