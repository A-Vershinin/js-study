(function () {
  /*
  Выведите на экран текущий месяц.
  */
  function customFunctionTask2() {
    function customFunction() {
      var data;

      function changeCustom() {
        data = new Date();
        console.log(data.getMonth());
      }
      changeCustom();
    }
    customFunction();
  }

  window.task2 = customFunctionTask2;
}());
