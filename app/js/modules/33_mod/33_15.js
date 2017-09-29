
  /*
	Дан массив с числами. Оставьте в нем только положительные числа.
	Затем извлеките квадратный корень и этих чисел.
	*/

  function customFunctionTask15() {
    function customFunction() {
      var arr = [11, 42, -32, 0, -14, -5, 63];

      function changeCustom(arr) {
        var result;

        var newArr = arr.filter(elem => elem > 0);

        result = newArr.map(elem => Math.sqrt(elem));

        console.log(result);
      }
      changeCustom(arr);
    }
    customFunction();
  }
  export default customFunctionTask15;

