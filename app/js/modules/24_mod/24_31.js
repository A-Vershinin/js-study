(function () {
  /*
   Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
  */
  function customFunctionTask31() {
    function customFunction() {
      var btn = document.querySelector("#btn1");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var elem = document.querySelector("#field");
          var clone = elem.cloneNode(true);
          var parent = elem.parentElement;
          parent.appendChild(clone);
        }
      }
      changeCustom(btn);
    }
    customFunction();
  }

  window.task31 = customFunctionTask31;
}());

