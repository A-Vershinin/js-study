(function () {
  /*
   Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы каждая цифра
   вставилась в новый инпут. Инпутов для цифр изначально не существует, они должны
   создаться в процессе работы скрипта
  */
  function customFunctionTask34() {
    function customFunction() {
      var field = document.querySelector("#field");

      function changeCustom(field) {
        field.addEventListener("blur", fieldHandler);

        function fieldHandler() {
          var i;
          var newInput;

          var valueList = this.value.split("");
          var parent = this.parentElement;

          for (i = 0; i < valueList.length; i++) {
            newInput = document.createElement("input");
            newInput.value = valueList[i];
            parent.appendChild(newInput);
          }
        }
      }
      changeCustom(field);
    }
    customFunction();
  }

  window.task34 = customFunctionTask34;
}());


