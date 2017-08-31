(function () {
  /*
  Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.
  */
  function customFunctionTask() {
    function customFunction() {
      var arr = [1, 2, 3, 4, 5, 6, 7, 8];

      function getNumbers(arr) {

        console.log(arr[0]);
        arr.splice(0, 1);
        if (arr.length !== 0) {
          getNumbers(arr);
        }
      }

      getNumbers(arr);
    }
    customFunction();
  }

  window.task1 = customFunctionTask;
}());
