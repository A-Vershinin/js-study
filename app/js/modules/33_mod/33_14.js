
  /*
	Дан массив с числами. Узнайте сколько элементов с начала
	массива надо сложить, чтобы в сумме получилось больше 10-ти.
	*/

  function customFunctionTask14() {
    function customFunction() {
      var arr = [1, 2, 3, 0, 4, 5, 6];

      function changeCustom(arr) {
        var result = 0;
        var data = 0;

        result = arr.reduce((sum, elem) => {
          if (sum > 10) {
            result = elem;
          } else {
            data += 1;
            return sum + elem;
          }
        });
        console.log(data);
      }
      changeCustom(arr);
    }
    customFunction();
  }
  export default customFunctionTask14;

