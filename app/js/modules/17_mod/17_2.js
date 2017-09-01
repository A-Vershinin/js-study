(function () {
  /*
  Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять
  сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
  */
  function customFunctionTask2() {
    function customFunction() {
      var number = 1212;
      var result = 0;

      function sum(number) {
        var i;
        var arr;
        var num = String(number);

        arr = num.split("");
        for (i = 0; i <= arr.length - 1; i++) {
          result += Number(arr[i]);
          if (result >= 9 || result === 9) {
            return result;
          }
        }


        if (result <= 9) {
          sum(number);
        }
        return result;
      }
      console.log(sum(number));
    }
    customFunction();
  }

  window.task2 = customFunctionTask2;
}());
