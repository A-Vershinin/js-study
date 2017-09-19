(function () {
  /*
  Реализуйте аккордион.
  */
  function customFunctionTask5() {
    function customFunction() {
      var container = document.querySelector(".container");

      function changeCustom(container) {
        var nextElem = container.children[1];
        var accordion = document.querySelector(".accordion");
        setInterval(show, 1000);

        function show() {
          accordion.style.display = "block";
        }

        createTabs();

        function createTabs() {


        }

        container.insertBefore(accordion, nextElem);
      }
      changeCustom(container);
    }
    customFunction();
  }

  window.task5 = customFunctionTask5;
}());

