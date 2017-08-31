(function () {
  /*
  Выведите с помощью цикла столбец чисел от 1 до 100
  */
  function customFunctionTask() {
    function customFunction() {
      var firstNum = 1;
      var lastNum = 100;

      function getNumbers(num1, num2) {
        var i;

        for (i = firstNum; i <= lastNum; i++) {
          console.log(i);
        }
      }
      getNumbers();
    }
    customFunction();
  }

  window.task1 = customFunctionTask;
}());
