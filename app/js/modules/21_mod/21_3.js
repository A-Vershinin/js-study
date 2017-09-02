(function () {
  /*
  Выведите на экран текущий год
  */
  function customFunctionTask3() {
    function customFunction() {
      var data;

      function changeCustom() {
        data = new Date();
        console.log(data.getFullYear());
      }
      changeCustom();
    }
    customFunction();
  }

  window.task3 = customFunctionTask3;
}());
