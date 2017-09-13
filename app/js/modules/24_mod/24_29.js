(function () {
  /*
   Дан элемент. Сделайте так, чтобы по нажатию по нему этот элемент удалялся.
  */
  function customFunctionTask29() {
    function customFunction() {
      var elem = document.querySelector("#btn-list");

      function changeCustom(elem) {
        elem.addEventListener("click", elemHandler);

        function elemHandler() {
          this.parentElement.removeChild(this);
        }
      }
      changeCustom(elem);
    }
    customFunction();
  }

  window.task29 = customFunctionTask29;
}());

