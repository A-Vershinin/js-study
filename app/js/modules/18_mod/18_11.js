(function () {
  /*
  Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
  */
  function customFunctionTask11() {
    function customFunction() {
      var sum = 0;
      var arr = [2, 10, -4, 44, 16, 5, -10, 11, 32, 5, 22, 8];

      function getArr(arr) {
        var i;

        for (i = 0; i <= arr.length; i++) {
          sum += arr[i]*arr[i];
        }
        return sum;
      }

      getArr(arr);
      console.log(sum);
    }
    customFunction();
  }

  window.task11 = customFunctionTask11;
}());
