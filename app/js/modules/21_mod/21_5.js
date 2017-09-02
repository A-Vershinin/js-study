(function () {
  /*
  Выведите на экран номер текущего дня недели.
  */
  function customFunctionTask5() {
    function customFunction() {
      var date;

      date = new Date();

      console.log(date.getDay());
    }
    customFunction();
  }

  window.task5 = customFunctionTask5;
}());
