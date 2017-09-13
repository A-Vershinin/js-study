(function () {
  /*
   Дан элемент #elem. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
  */
  function customFunctionTask20() {
    function customFunction() {
      var target = document.querySelector(".list");

      function changeCustom(target) {
        var elem = target.lastElementChild.style.color = "red";
        console.log(elem);
      }
      changeCustom(target);
    }
    customFunction();
  }

  window.task20 = customFunctionTask20;
}());

