;(function () {
  /*
	Даны кнопки. Привяжите к каждой кнопке событие по клику,
	которое будет считать количество нажатий по кнопке и
	выводить его в текст кнопки. Количество нажатий для каждой
	кнопки должно хранится в замыкании.
	*/

  function customFunctionTask8() {
    function customFunction() {
      var buttons = document.getElementsByClassName("link");

      function changeCustom(buttons) {
        var i;

        var btnHandler = function() {
          var k = 1;
          return function() {
            this.innerHTML = k;
            return k += 1;
          };
        };

        for (i = 0; i < buttons.length; i++) {
          buttons[i].addEventListener("click", btnHandler);
        }
      }
      changeCustom(buttons);
    }
    customFunction();
  }
  window.task8 = customFunctionTask8;
}());
