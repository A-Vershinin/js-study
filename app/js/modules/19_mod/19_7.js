(function () {
  /*
  Повторите поведение кнопки по нажатию на нее: поменять картинку по клику на кнопку
  */
  function customFunctionTask7() {
    function customFunction() {
      var elem = document.getElementById("btn1");
      var img = document.getElementById("img");

      elem.addEventListener("click", () => {
        img.src = "http://loremflickr.com/240/120/dog";
      }, false);
    }
    customFunction();
  }

  window.task7 = customFunctionTask7;
}());
