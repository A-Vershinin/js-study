(function () {
  /*
  Повторите поведение: дано поле input и две кнопки input. По клику на первую кнопку полю display: none,
   по клику на вторую display: block.
  */
  function customFunctionTask15() {
    function customFunction() {
      var btn1 = document.getElementById("btn1");
      var btn2 = document.getElementById("btn2");
      var field = document.getElementById("field");

      function someFunction(btn1, btn2, field) {
        function handler1() {
          field.style.display = "none";
        }
        function handler2() {
          field.style.display = "block";
        }
        btn1.addEventListener("click", handler1);
        btn2.addEventListener("click", handler2);
      }
      // someFunction(btn1, btn2, field);
    }
    customFunction();
  }

  window.task15 = customFunctionTask15;
}());
