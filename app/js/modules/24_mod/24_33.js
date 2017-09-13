(function () {
  /*
   Дан инпут. Рядом с ним находится кнопочка "+". По нажатию на эту кнопку под
   нашим инпутом должен появится еще один пустой инпут.
  */
  function customFunctionTask33() {
    function customFunction() {
      var btn = document.querySelector("#btn1");
      var field = document.querySelector("#field");

      function changeCustom(btn, field) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var parent = this.parentElement;
          var clone = field.cloneNode(true);
          parent.appendChild(clone);
        }
      }
      changeCustom(btn, field);
    }
    customFunction();
  }

  window.task33 = customFunctionTask33;
}());

