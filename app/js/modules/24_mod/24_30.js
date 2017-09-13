(function () {
  /*
   Дан ol, а внутри него li. Сделайте так, чтобы по нажатию на любую li эта li удалялась.
  */
  function customFunctionTask30() {
    function customFunction() {
      var list = document.querySelector(".list");

      function changeCustom(list) {
        var i;

        for (i = 0; i < list.children.length; i++) {
          list.children[i].addEventListener("click", btnHandler);
        }

        function btnHandler() {
          // console.log(this);
          this.parentElement.removeChild(this);
        }
      }
      changeCustom(list);
    }
    customFunction();
  }

  window.task30 = customFunctionTask30;
}());

