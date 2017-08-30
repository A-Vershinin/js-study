(function () {
  /*
  Найдите все года от 1 до 2017, сумма цифр которых равна 13. Для этого используйте
  вспомогательную функцию getDigitsSum из предыдущей задачи.
  */
  function customFunctionTask5() {
    function customFunction() {
      var arrSum = [];

      function getDigitsSum(num) {
        var i;
        var sum = 0;
        var number = String(num);

        for (i = 0; i < number.length; i++) {
          sum += Number(number[i]);
        }
        return sum;
      }

      function getYears() {
        var i;

        for (i = 1; i <= 2017; i++) {
          if (getDigitsSum(i) === 13) {
            arrSum.push(i);
          }
        }
        return arrSum;
      }
      getYears();
      console.log(arrSum);
    }
    customFunction();
  }

  window.task5 = customFunctionTask5;
}());
