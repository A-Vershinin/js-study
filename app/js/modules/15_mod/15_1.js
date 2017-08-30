(function () {
  /*
  Дан массив с числами. Создайте из него новый массив, где останутся лежать
  только положительные числа. Создайте для этого вспомогательную функцию isPositive(),
  которая параметром будет принимать число и возвращать true, если число положительное,
  и false - если отрицательное.
  */
  function customFunctionTask() {
    function customFunction() {
      var i;
      var arr = [1, 2, -3 ,4, -5, -6, 7, 8];
      var sum = [];

      for (i = 0; i < arr.length; i++) {
        if (isPositive(arr[i])) {
          sum.push(arr[i]);
        }
      }

      function isPositive(number) {
        return number > 0;
      }
      console.log(sum);

    }
    customFunction();
  }

  window.task1 = customFunctionTask;
}());
