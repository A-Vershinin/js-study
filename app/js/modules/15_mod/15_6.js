(function () {
  /*
  Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и
  проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
  */
  function customFunctionTask6() {
    function customFunction() {
      var number;

      function isEven(num) {
        number = String(num);
        return num % 2 === 0;
      }
      console.log(isEven(14));
    }
    customFunction();
  }

  window.task6 = customFunctionTask6;
}());
