(function () {
  /*
   Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.
  */
  function customFunctionTask28() {
    function customFunction() {
      var parent = document.querySelector(".list");

      function changeCustom(parent) {
        var btn = document.querySelector("#btn-list");
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var parent = document.querySelector(".list");
          var lastChild = parent.lastElementChild;
          parent.removeChild(lastChild);
        }
      }
      changeCustom(parent);
    }
    customFunction();
  }

  window.task28 = customFunctionTask28;
}());

