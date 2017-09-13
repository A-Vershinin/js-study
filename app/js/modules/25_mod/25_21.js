(function () {
  /*
  По нажатию на кнопку проверьте, прокручена ли страница до самого низа.
  Если это так - прокрутите ее в положение 100px от верхнего края
  */
  function customFunctionTask21() {
    function customFunction() {
      var btn = document.querySelector("#btn1");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var page = document.body;
          if (page.scrollHeight - page.scrollTop === page.clientHeight) {
            window.scrollTo(0, 100);
          }
        }
      }
      changeCustom(btn);
    }
    customFunction();
  }
  window.task21 = customFunctionTask21;
}());

