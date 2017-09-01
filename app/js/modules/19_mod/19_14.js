(function () {
  /*
  Повторите поведение: по клику на кнопку у соседнего поля меняйте текст на красный и увеличить ширину поля
  */
  function customFunctionTask14() {
    function customFunction() {
      var btn = document.getElementById("btn1");
      var field = document.getElementById("field");

      function someFunction(btn, field) {
        btn.onclick = function() {
          this.style.color = "red";
          field.style.width = "300px";
        };
      }
      // someFunction(btn, field);
    }
    customFunction();
  }

  window.task14 = customFunctionTask14;
}());
