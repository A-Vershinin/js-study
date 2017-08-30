(function () {
  /*
  Дан массив с числами. Запишите в новый массив только те числа, которые
  больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию
  isNumberInRange из предыдущей задачи.
  */
  function customFunctionTask3() {
    function customFunction() {
      var i;
      var arr = [1, 2, -3 ,14, -5, -6, 7, 8, 9, 10, 12];
      var sum = [];

      for (i = 0; i < arr.length; i++) {
        if (isNumberCheck(arr[i])) {
          sum.push(arr[i]);
        }
      }

      function isNumberCheck(number) {
        return number > 0 && number < 10;
      }

      console.log(sum);
    }
    customFunction();
  }

  window.task3 = customFunctionTask3;
}());
