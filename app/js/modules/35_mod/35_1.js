(function () {
  /*

  */
  function customFunctionTask() {
    function customFunction() {
      var container = document.querySelector(".container");

      function changeCustom(container) {
        var obj = {
          key: "sss",
          firstName: "Василий",

          toSting: function getName() {
            return this.firstName;
          },
          valueOf: function getNumber() {
            return 1;
          }
        };
        // obj.valueOf();

        // console.log(obj.valueOf() === true);
      }
      changeCustom(container);
    }
    customFunction();
  }

  window.task1 = customFunctionTask;
}());

