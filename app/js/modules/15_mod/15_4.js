(function () {
  /*
  Сделайте функцию getDigitsSum (digit - это цифра), которая параметром
  принимает целое число и возвращает сумму его цифр
  */
  function customFunctionTask4() {
    function customFunction() {
      var sum = 0;

      function getDigitsSum(num) {
        var number = String(num);
        var i;

        for (i = 0; i < number.length; i++) {
          sum += Number(number[i]);
        }
        return sum;
      }
      getDigitsSum(2554);
      console.log(sum);
    }
    customFunction();
  }

  window.task4 = customFunctionTask4;
}());
