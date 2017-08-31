(function () {
  /*
  Выведите с помощью цикла столбец четных чисел от 1 до 100.
  */
  function customFunctionTask3() {
    function customFunction() {
      var firstNum = 1;
      var lastNum = 100;

      function getNumbers(num1, num2) {
        var i;

        for (i = firstNum; i <= lastNum; i++) {
          if (i%2 === 0) {
            console.log(i);
          }
        }
      }
      getNumbers(firstNum, lastNum);
    }
    customFunction();
  }

  window.task3 = customFunctionTask3;
}());
