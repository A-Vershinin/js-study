;(function () {
  /*
	Дан массив цветов. Даны абзацы. По первому
	нажатию на абзац он должен покраситься в первый
	цвет из массива, по второму нажатию - во второй и
	так далее. Все абзацы работают независимо.
	*/
  function showA() {
    var arr = ["red", "coral", "green", "blue"];
    var par = document.getElementsByTagName("p");
    var i;
    var elem;
    var count;

    for (i = 0; i < par.length; i += 1) {
      elem = par[i];
      count = 0;
      console.log("1");
      elem.onclick = (function() {
        return function () {
          this.style.color = arr[count];
          count += 1;
        };
      })();
    }
  };
  window.task9 = showA;
}());
