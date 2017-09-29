
  /*
	Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
	*/

  function customFunctionTask4() {
    function customFunction() {
      var arr = [10, 14, 16, 8];

      function changeCustom(arr) {
        arr.every(num => console.log(num > 0));
      }
      changeCustom(arr);
    }
    customFunction();
  }

  export default customFunctionTask4;

