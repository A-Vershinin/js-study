(function () {
  /*
  Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
  что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true,
  если не так - false. Показать решение.
  */
  function customFunctionTask2() {
    function customFunction() {
      var someNumber;

      function isNumberInRange(number) {
        return number > 0 && number < 10;
      }

      someNumber = isNumberInRange(5);
      console.log(someNumber);
    }
    customFunction();
  }

  window.task2 = customFunctionTask2;
}());
