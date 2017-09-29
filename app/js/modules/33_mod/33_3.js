 /*
	Дан массив с числами. Найдите сумму этих чисел.
	*/

  function customFunctionTask3() {
    function customFunction() {
      var arr = [10, 14, 16, 8];

      function changeCustom(arr) {
        var newArr;

        newArr = arr.map(num => num * num);
        console.log(newArr);
      }
      changeCustom(arr);
    }
    customFunction();
  }

  export default customFunctionTask3;

