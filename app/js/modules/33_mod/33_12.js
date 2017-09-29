
  /*
	Дан массив с числами. Найдите сумму первых N элементов до первого нуля.
	Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше
	стоит элемент с числом 0.
	*/

  function customFunctionTask12() {
    function customFunction() {
      var arr = [1, 2, 3, 0, 4, 5, 6];

      function changeCustom(arr) {
        var result;
        var data;

        result = arr.reduce((sum, elem) => {
          if (elem === 0) {
            data = sum;
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
  export default customFunctionTask12;

