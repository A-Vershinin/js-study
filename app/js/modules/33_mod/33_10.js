
  /*
	Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве
	*/

  function customFunctionTask10() {
    function customFunction() {
      var arr = [10, 14, -30, 16, -8, 15, -5];

      function changeCustom(arr) {
        var newArr;

        newArr = arr.filter(function(elem) {
          return elem < 0;
        });

        console.log(newArr.length);
      }
      changeCustom(arr);
    }
    customFunction();
  }

  export default customFunctionTask10;

