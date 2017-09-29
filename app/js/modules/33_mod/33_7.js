
  /*
	Дан массив с числами. Оставьте в нем только четные числа.
	*/

  function customFunctionTask7() {
    function customFunction() {
      var arr = [10, 14, -30, 16, -8, 15];

      function changeCustom(arr) {
        var newArr;

        newArr = arr.filter(function(num) {
          return num % 2 === 0;
        });

        console.log(newArr);
      }
      changeCustom(arr);
    }
    customFunction();
  }

  export default customFunctionTask7;

