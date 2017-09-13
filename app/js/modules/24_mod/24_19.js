(function () {
  /*
   Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета.
  */
  function customFunctionTask19() {
    function customFunction() {
      var target = document.querySelector(".list");

      function changeCustom(target) {
        var elem = target.firstElementChild.style.color = "red";
        console.log(elem);
      }
      changeCustom(target);
    }
    customFunction();
  }

  window.task19 = customFunctionTask19;
}());

