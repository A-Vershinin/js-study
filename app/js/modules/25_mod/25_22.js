(function () {
  /*
  Дан элемент #elem. По клику на него увеличьте его ширину и высоту в 2 раза.
  */
  function customFunctionTask22() {
    function customFunction() {
      var btn = document.querySelector("#btn1");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var itemWidth = this.offsetWidth;
          var itemHeight = this.offsetWidth;
          this.style.width = itemWidth * 2 + "px";
          this.style.height = itemHeight * 2 + "px";
        }
      }
      // changeCustom(btn);
    }
    customFunction();
  }
  window.task22 = customFunctionTask22;
}());

