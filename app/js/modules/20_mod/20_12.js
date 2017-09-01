(function () {
  /*
  Повторите страницу по данному по образцу:
  Дана кнопка и три ссылки. По клику на кнопку вывести в каждую ссылку имя ссылки + значение с атрибута src.
  */
  function customFunctionTask12() {
    function customFunction() {
      var btn = document.getElementById("btn-big");
      var links = document.getElementsByClassName("link");

      function chengeCustom(btn, links) {
        function someHandler() {
          var i;
          for (i = 0; i <= links.length; i++) {
            links[i].innerHTML = links[i].innerHTML + " ("+links[i].getAttribute("href")+")";
          }
        }

        console.log(links);
        btn.addEventListener("click", someHandler);
      }
      chengeCustom(btn, links);
    }
    customFunction();
  }

  window.task12 = customFunctionTask12;
}());
