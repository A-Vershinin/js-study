
/*
  Реализуйте прогресс бар. По клику на кнопку шкала должна заполниться до 100% с текущейго
  значения. Добавить управление времем анимации.
*/
function customFunctionTask() {
  function customFunction() {
    var progress = document.querySelectorAll(".progress-bar")[0];
    var progressBarElem = progress.querySelector(".progress-bar__item");
    var progressValue = progress.querySelector(".progress-bar__set");
    var timeAnimation = 50;

    setInterval(show, 1000);
    function show() {
      document.querySelector(".progress-bar-wrap").style.display = "block";
    }

    progressBar(progressBarElem, progressValue);

    function progressBar(bar, value, timeAnim) {
      var bar = bar || null;
      var startValue = parseInt(value.innerHTML.slice(0, 2)) || 0;
      var timeAnimation = timeAnim || 100;

      function setValue() {
        var intervaId = setInterval(function() {
          if (startValue > 100) {
            clearInterval(intervaId);
          } else {
            bar.style.width = startValue + "%";
            progressValue.innerHTML = startValue + "%";
          }
          startValue += 1;
        }, timeAnimation);
      }

      var btn = document.getElementsByClassName("btn")[0];
      btn.addEventListener("click", setValue);
    }
  }
  customFunction();
}

export default customFunctionTask;

