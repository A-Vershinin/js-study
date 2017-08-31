(function () {
  /*
  Выведите с помощью цикла столбец чисел от 100 до 1
  */
  function customFunctionTask2() {
    function customFunction() {
      var firstNum = 100;
      var lastNum = 1;

      function getNumbers(num1, num2) {
        var i;

        for (i = firstNum; i >= lastNum; i--) {
          console.log(i);
        }
      }
      getNumbers();
    }
    customFunction();
  }

  window.task2 = customFunctionTask2;
}());
