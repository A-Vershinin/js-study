(function () {
  /*
  Дан элемент #elem. Получите его ширину и высоту, без учета границы и padding
  */
  function customFunctionTask7() {
    function customFunction() {
      var btn = document.querySelector("#link");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var elem = document.querySelector("#btn-big");
          var style = getComputedStyle(elem);
          alert(`${style.width} ${style.height}`);
        }
      }
      // changeCustom(btn);
    }
    customFunction();
  }
  window.task7 = customFunctionTask7;
}());

