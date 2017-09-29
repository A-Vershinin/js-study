(function () {
  /*
  Дан элемент #elem. По клику на него выведите название его тега.
  */
  function customFunctionTask8() {
    function customFunction() {
      var elem = document.querySelector("#title");

      function changeCustom(elem) {
        elem.addEventListener("click", () => {
          alert(elem.tagName);
        });
      }
      changeCustom(elem);
    }
    customFunction();
  }

  window.task8 = customFunctionTask8;
}());

