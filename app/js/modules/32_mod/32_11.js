
  /*
  Даны инпуты. Сделайте так, чтобы каждый инпут хранил
  историю своих изменений. Каждый инпут свою. Изменением
  считается событие onchange. История должна хранится в
  замыкании. Над каждым инпутом должны быть стрелочки назад
  и вперед, с помощью которых можно передвигаться по истории.
  */
  function inputBlur() {
    var i;
    var input = document.getElementsByTagName("input");

    for (i = 0; i < input.length; i++) {
      input[i].onchange = (function () {
        var arr = [];
        return function () {
          arr.push(this.value);
          console.log(arr);
        };
      })();
    }
  }

  export default inputBlur;

