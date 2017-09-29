
  /*
	Дан массив с числами. Найдите сумму этих чисел.
	*/

  function customFunctionTask2() {
    function customFunction() {
      var arr = [10, 14, 16, 8];

      function changeCustom(arr) {
        var sum = 0;

        arr.forEach((num) => {
          sum += num;
          return sum;
        });
        console.log(sum);
      }
      changeCustom(arr);
    }
    customFunction();
  }

  export default customFunctionTask2;
