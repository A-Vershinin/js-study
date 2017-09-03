(function () {
  /*
  Даны дивы. По первому нажатию на каждый див он красится красным фоном, по
  второму красится обратно и так далее каждый клик происходит чередование фона.
  Сделайте так, чтобы было две функции: одна красит в красный цвет, другая в зеленый
  и они сменяли друг друга через removeEventListener.
  */
  function customFunctionTask9() {
    function customFunction() {
      var arr = document.querySelectorAll(".link");

      function changeCustom(arr) {
        var i;

        for (i = 0; i < arr.length; i++) {
          this.addEventListener("click", changeToRed);
          console.log(arr[i]);
        }

        function changeToRed() {
          this.style.borderColor = "red";
          this.removeEventListener("click", changeToRed);
          this.addEventListener("click", changeToGreen);
        }

        function changeToGreen() {
          this.style.borderColor = "green";
          this.removeEventListener("click", changeToGreen);
          this.addEventListener("click", changeToRed);
        }
      }
      changeCustom(arr);
    }
    customFunction();
  }
  window.task9 = customFunctionTask9;
}());

