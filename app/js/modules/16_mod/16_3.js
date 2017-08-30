(function () {
  /*
  Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным
  текстом или нет. Функция первым параметром должна принимать текст элемента, а
  вторым - массив, в котором делается поиск. Функция должна возвращать true или false.
  */
  function customFunctionTask3() {
    function customFunction() {
      var someArr = ["Кофе", "Чай", "Вода", "Спрайт"];
      var elem = "Спрайт";
      var result;

      function inArray(elem, arr) {
        var i;

        for (i = 0; i <= arr.length; i++) {
          if (arr[i] === elem) {
            return true;
          }
        }
        return false;
      }

      result = inArray(elem, someArr);
      console.log(result);
    }
    customFunction();
  }

  window.task3 = customFunctionTask3;
}());
