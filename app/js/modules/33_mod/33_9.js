;(function () {
  /*
	Дан массив, в нем могут быть обычные элементы и подмассивы, например
	[1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
	*/

  function customFunctionTask9() {
    function customFunction() {
      var arr = [1, 2, [3, 4], 5, [6, 7]];

      function changeCustom(arr) {
        var newArr;

        newArr = arr.filter(function(elem) {
          return Array.isArray(elem);
        });

        console.log(newArr);
      }
      changeCustom(arr);
    }
    customFunction();
  }
  window.task9 = customFunctionTask9;
}());
