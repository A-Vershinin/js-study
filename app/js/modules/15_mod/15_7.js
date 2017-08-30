(function () {
  /*
  Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать
  только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
  */
  function customFunctionTask7() {
    function customFunction() {
      var arr = [10, 22, 15, 2, 5, 115];
      var newArr = [];

      function isEven(num) {
        var number = String(num);
        return number % 2 === 0;
      }
      function buildNewArr(arr) {
        var i;
        for (i = 0; i <= arr.length; i++) {
         if (isEven(arr[i])) {
           newArr.push(arr[i]);
         }
        }
        return newArr;
      }
      buildNewArr(arr);
      console.log(newArr);
    }
    customFunction();
  }

  window.task7 = customFunctionTask7;
}());
