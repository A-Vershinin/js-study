(function () {
  /*
  Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его
  делителей (чисел, на которое делится данное число).
  */
  function customFunctionTask8() {
    function customFunction() {
      var arr = [];

      function getDivisors(num) {
        var i;

        for (i = 0; i < num; i++) {
          if (num % i === 0) {
            arr.push(i);
          }
        }
        return arr;
      }

      getDivisors(234143);
      console.log(arr);
    }
    customFunction();
  }

  window.task8 = customFunctionTask8;
}());
