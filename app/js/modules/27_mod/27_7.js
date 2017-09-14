(function () {
  /*
 Дан инпут. В него вводится текст и нажимается клавиша Enter (ее код имеет номер 13).
 Сделайте так, чтобы по нажатию Enter введенный текст попадал в абзац под
 инпутом, а содержимое инпута очищалось
  */
  function customFunctionTask7() {
    function customFunction() {
      var field = document.querySelector("#field");

      function changeCustom(field) {
        field.addEventListener("keypress", fieldHandler);

        function fieldHandler(evt) {
          var parent = document.querySelector(".block");
          var item = document.createElement("p");
          if (evt.keyCode === 13) {
            item.innerHTML = this.value;
            parent.appendChild(item);
            this.value = "";
          }
        }
      }
      changeCustom(field);
    }
    customFunction();
  }

  window.task7 = customFunctionTask7;
}());

