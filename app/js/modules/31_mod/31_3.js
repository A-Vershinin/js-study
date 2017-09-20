(function () {
  /*
  Реализуйте автодополнение. Суть: дан, к примеру, массив стран. Дан инпут.
  Когда вы вводите первые буквы страны под инпутом появляется выпадающий список,
  в котором расположены страны, которые начинаются на те буквы, которые вы ввели.
  Чем больше букв вы вводите - тем меньше стран в списке. Страну можно выбрать,
  кликнув по ней мышкой - в этом случае ее название появится в инпуте.
  Список стран храните в массиве.
  */
  function customFunctionTask3() {
    function customFunction() {
      var container = document.querySelector(".container");

      function changeCustom(container) {
        var nextElem = container.children[1];
        var autocomplit = document.querySelector(".autocomplit");
        var countries = ["Австралия", "Австрия", "Азербайджан", "Албания", "Алжир", "Ангола", "Багамские острова", "Бангладеш", "Бурунди", "Бутан", "Вануату", "Ватикан", "Венесуэла"];
        var input;
        var list;

        setInterval(show, 1000);
        function show() {
          autocomplit.style.display = "block";
        }

        input = autocomplit.querySelector(".autocomp__input");
        list = document.createElement("ul");
        list.classList.add("autocomplit__list");
        autocomplit.appendChild(list);
        input.addEventListener("keyup", inputHandler);
        list.addEventListener("click", selectWord);

        function inputHandler(evt) {
          var i;
          var words;
          var value;
          var newArr;

          value = input.value.trim().toLowerCase();
          if (value) {
            words = countries.filter(function(item) {
              return item.toLowerCase().indexOf(value) === 0;
            });

            list.innerHTML = "";
            newArr = getComliteHtml(words);
            for (i = 0; i < newArr.length; i++) {
              list.appendChild(newArr[i]);
            }
            list.style.display = "block";
          } else {
            list.style.display = "none";
          }
        }

        function selectWord(evt) {
          var targ = event.target;
          if (targ.parentNode === list) {
            input.value = targ.innerHTML;
            list.style.display = "none";
          }
        }

        function getComliteHtml(words) {
          var i;
          var arr = [];
          var item;
          for (i = 0; i < words.length; i++) {
            item = document.createElement("li");
            item.classList.add("autocomplit__item");
            item.innerHTML = words[i];
            arr.push(item);
          }
          return arr;
        }
        container.insertBefore(autocomplit, nextElem);
      }
      changeCustom(container);
    }
    customFunction();
  }

  window.task3 = customFunctionTask3;
}());

