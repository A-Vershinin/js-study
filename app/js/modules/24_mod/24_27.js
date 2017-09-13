(function () {
  /*
   Дан элемент #parent, внутри него дан элемент #child. Дана кнопка. По нажатию на эту кнопку удалите элемент #child
  */
  function customFunctionTask27() {
    function customFunction() {
      var parent = document.querySelector("#elem");

      function changeCustom(parent) {
        var btn = document.querySelector("#btn-list");
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var child = document.querySelector("#elem");
          var parent = child.parentElement;
          parent.removeChild(child);
        };
      }
      changeCustom(parent);
    }
    customFunction();
  }

  window.task27 = customFunctionTask27;
}());

