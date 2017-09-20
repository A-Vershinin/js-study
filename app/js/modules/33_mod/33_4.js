;(function () {
  /*
	Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
	*/

  function customFunctionTask4() {
    function customFunction() {
      var arr = [10, 14, 16, 8];

      function changeCustom(arr) {
        arr.every(function(num) {
          return console.log(num > 0);
        });
      }
      changeCustom(arr);
    }
    customFunction();
  }
  window.task4 = customFunctionTask4;
}());
