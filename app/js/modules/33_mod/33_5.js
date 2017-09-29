
  /*
	Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы
	*/

  function customFunctionTask5() {
    function customFunction() {
      var arr = [10, 14, 30, 16, 8, 15];

      function changeCustom(arr) {
        var getNumber = function(num) {
          return num < 0;
        };

        console.log(arr.some(getNumber));
      }
      changeCustom(arr);
    }
    customFunction();
  }

  export default customFunctionTask5;

