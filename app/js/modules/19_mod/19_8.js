(function () {
  /*
  Повторите поведение: вывести alert с значением которое записано в поле
  после того, как поставили курсор в поле через this
  */
  function customFunctionTask8() {
    function customFunction() {
      var field = document.getElementById("field");

      function handler(elem) {
        this.addEventListener("focus", function() {
          alert(elem.value);
        } , false);
      }
      // handler(field);
    }
    customFunction();
  }

  window.task8 = customFunctionTask8;
}());
