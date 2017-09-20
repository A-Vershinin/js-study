;(function () {
  /*
	Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов
	*/

  function customFunctionTask8() {
    function customFunction() {
      var arr = ["Яблоки", "Груши", "Сливы", "Клубника", "Апельсины"];

      function changeCustom(arr) {
        var newArr;

        newArr = arr.filter(function(num) {
          return num.length > 5;
        });

        console.log(newArr);
      }
      changeCustom(arr);
    }
    customFunction();
  }
  window.task8 = customFunctionTask8;
}());
