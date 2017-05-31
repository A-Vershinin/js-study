;(function() {

/*
Применение замыканий
дано несколько кнопочек. Давайте сделаем так,
чтобы каждая кнопочка при нажатии увеличивала
свое значение на единицу.
Реализуем задачу на замыкании:
*/
  function clickUpValue() {

    //создам кнопки
    var box = document.getElementById("container");
    var btn;
    for (var i = 0; i < 3; i += 1) {
      btn = document.createElement("button");
      btn.innerHTML = "JavaScript";
      box.appendChild(btn);
    }

    var buttons = document.getElementsByTagName('button');
    for (var j = 0; j < buttons.length; j += 1) {
      buttons[j].onclick = (function() {
        console.log(buttons);
        var counter = 0;
        	//Эта функция привяжется к onclick:
        return function() {
          counter++;  //берется из замыкания - для каждой
          // кнопки своя переменная
          this.innerHTML += counter;
        }
      })();
    }
  }
  window.task13 = clickUpValue;
}());
