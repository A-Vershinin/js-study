(function () {
  /*
  Выведите на экран текущий день недели (словом, по-русски).
  Создайте для этого вспомогательную функцию showDay, которая параметром
  принимает число, а возвращает день недели по-русски.
  */
  function customFunctionTask6() {
    function customFunction() {
      var date;
      var day;
      var arrDays = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

      date = new Date();
      day = date.getDay();

      function showDay(day) {
        return arrDays[day];
      }
      console.log(showDay(day));
      showDay(day);
    }
    customFunction();
  }

  window.task6 = customFunctionTask6;
}());
