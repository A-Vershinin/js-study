
  /*
  В инпут вводится страна и нажимается Enter. По нажатию на Enter сделайте так,
  чтобы введенные страны записывались в абзац под инпутом через запятую.
  То есть по каждому нажатию Enter в абзац будут добавляться все новые и новые страны.
  */
  function customFunctionTask19() {
    function customFunction() {
      var input = document.querySelector("#field");

      function changeCustom(input) {
        var parent = input.parentElement;
        var item = document.createElement("p");
        parent.appendChild(item);
        input.addEventListener("keypress", inputHandler);

        function inputHandler(evt) {
          if (evt.keyCode === 13) {
            item.innerHTML += `${this.value},`;
          }
        }
      }
      changeCustom(input);
    }
    customFunction();
  }

  export default customFunctionTask19;

