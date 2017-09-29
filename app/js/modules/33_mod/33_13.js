
  /*
	Дан массив с числами. Найдите сумму последних N элементов до первого нуля с
	конца. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента,
	так как дальше стоит элемент с числом 0.
	*/

  function customFunctionTask13() {
    function customFunction() {
      var arr = [1, 2, 3, 0, 4, 5, 6];

      function changeCustom(arr) {
        var result;
        var data;

        result = arr.reduce(function(sum, elem) {
          if (elem === 0) {
            data = elem;
          } else {
            return sum + elem;
          }
        });
        if (data === undefined) {
          data = result;
        }

        console.log(data);
      }
      changeCustom(arr);
    }
    customFunction();
  }
  export default customFunctionTask13;

