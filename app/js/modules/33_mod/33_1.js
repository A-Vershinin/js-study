
  /*
	Дан массив с числами. Создайте новый массив, состоящий
	из квадратов этих чисел.
	*/
  function customFunctionTask1() {
    function customFunction() {
      var arr = [10, 14, 16, 8];

      function changeCustom(arr) {
        var newArr = [];

        arr.forEach(function(num) {
          return newArr.push(num * num);
        });
        console.log(newArr);
      }
      changeCustom(arr);
    }
    customFunction();
  }

  export default customFunctionTask1;

