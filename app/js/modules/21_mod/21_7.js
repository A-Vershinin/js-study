(function () {
  /*
  Узнайте, какой был 7-го января 2015 года.
  */
  function customFunctionTask7() {
    function customFunction() {
      var date;
      var day;
      var arrDays = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

      date = new Date(2015, 0, 7);
      day = date.getDay();

      function showDay(day) {
        return arrDays[day];
      }
      console.log(showDay(day));
      showDay(day);
    }
    customFunction();
  }

  window.task7 = customFunctionTask7;
}());
