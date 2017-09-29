(function () {
  /*
  Повторите поведение: по наведению на картинку меняйте на другую.
  */
  function customFunctionTask13() {
    function customFunction() {
      var img = document.getElementById("img");
      var img1 = "img/member1.jpg";
      var img2 = "img/member2.jpg";

      function someOver(elem) {
        function doHandler(elem) {
          this.src = img1;
          console.log("1");
        }
        function endHandler(elem) {
          this.src = img2;
          console.log("2");
        }

        elem.addEventListener("mouseover", doHandler);
        elem.addEventListener("mouseout", endHandler);
      }
      // someOver(img);
    }
    customFunction();
  }

  window.task13 = customFunctionTask13;
}());
