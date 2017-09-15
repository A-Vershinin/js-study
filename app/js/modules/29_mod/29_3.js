(function () {
  /*
 Дан селект. Дан инпут. По изменению селекта выведите текст выбранного пункта в инпут.
  */
  function customFunctionTask3() {
    function customFunction() {
      var selectItem = document.querySelector("#select");

      function changeCustom(selectItem) {
        selectItem.addEventListener("change", selectHandler);

        function selectHandler() {
          var i;
          var field = document.querySelector("#select-input-id");
          var options = selectItem.options;

          for (i = 0; i < options.length; i++) {
            if (options[i].selected === true) {
              field.value = options[i].text;
            }
          }
        }
      }
      changeCustom(selectItem);
    }
    customFunction();
  }
  window.task3 = customFunctionTask3;
}());

