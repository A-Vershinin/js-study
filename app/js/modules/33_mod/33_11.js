
  /*
	Дан массив с числами. Найдите сумму этих чисел.
	*/

  function customFunctionTask11() {
    function customFunction() {
      var arr = [10, 14, -30, 16, -8, 15, -5];

      function changeCustom(arr) {
        var result;

        result = arr.reduce((elem, index) => elem + index);

        console.log(result);
      }
      changeCustom(arr);
    }
    customFunction();
  }
  export default customFunctionTask11;

