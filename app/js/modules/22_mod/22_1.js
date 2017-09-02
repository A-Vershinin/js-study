(function () {
  /*

  */
  function customFunctionTask() {
    function customFunction() {
      var data;

      function changeCustom() {
        data = new Date();
        console.log(data.getDate());
      }
      changeCustom();
    }
    customFunction();
  }

  window.task1 = customFunctionTask;
}());
