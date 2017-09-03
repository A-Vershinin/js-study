(function () {
  /*
  Дан ol. Вставьте ему в конец li с текстом 'пункт'
  */
  function customFunctionTask11() {
    function customFunction() {
      var elem = document.querySelector(".list");

      function changeCustom(elem) {
        var li = document.createElement("li");
        li.innerHTML = "пункт";
        elem.appendChild(li);
      }
      changeCustom(elem);
    }
    customFunction();
  }

  window.task11 = customFunctionTask11;
}());

