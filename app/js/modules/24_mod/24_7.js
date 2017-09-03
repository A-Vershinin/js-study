(function () {
  /*
  Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему
  границу. Решите задачу с помощью свойства cssText.
  */
  function customFunctionTask7() {
    function customFunction() {
      var elem = document.querySelector("#title");

      elem.style.cssText = "color: red; font-size: 30px; border: solid 1px black;";

      console.log(elem);
    }
    customFunction();
  }

  window.task7 = customFunctionTask7;
}());

