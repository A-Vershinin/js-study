(function () {
  /*
 На странице расположено несколько форм. В них есть инпуты, в инпутах числа. Дана кнопка.
 По нажатию на эту кнопку циклом переберите все формы на странице, затем циклом
 переберите все инпуты в каждой форме и найдите сумму чисел из всех этих инпутов.
  */
  function customFunctionTask2() {
    function customFunction() {
      var forms = document.querySelectorAll(".form");

      function changeCustom(forms) {
        var btn = document.querySelector("#form-btn");
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var i;
          var j;
          var result = 0;
          var inputs;

          for (i = 0; i < forms.length; i++) {
            if (forms[i].elements) {
              inputs = forms[i].querySelectorAll("input[type=text]");
              for (j = 0; j < inputs.length; j++) {
                result += Number(inputs[i].value);
              }
            }
          }
          console.log("Сумму чисел из всех инпутов: " + result);
        }
      }
      changeCustom(forms);
    }
    customFunction();
  }
  window.task2 = customFunctionTask2;
}());

