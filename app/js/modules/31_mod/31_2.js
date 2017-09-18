(function () {
  /*
  Реализуйте чеклист. Должен быть инпут с добавлением задачи, а под ним - список с задачами.
  Возле каждой задачи чекбос. Если нажать на чекбокс - задача становится выполненной,
  перечеркивается и становится красного цвета, чекбокс при этом пропадает. Справа от любой
  задачи должен быть крестик для удаления этой задачи.
  */
  function customFunctionTask2() {
    function customFunction() {
      var container = document.querySelector(".container");

      function changeCustom(container) {
        var nextElem = container.children[1];
        var list = document.querySelector(".todo-list");
        var ul;

        setInterval(show, 1000);
        function show() {
          list.style.display = "block";
        }

        list.addEventListener("keypress", listHandler);
        ul = document.createElement("ul");
        ul.classList.add("list-wrapper");
        list.appendChild(ul);

        function listHandler(evt) {
          var li;
          var spanClose;
          var rowInput;
          var rowLabel;
          var input = list.querySelector(".list__input");

          if (evt.keyCode === 13) {
            li = document.createElement("li");
            spanClose = document.createElement("span");
            rowInput = document.createElement("input");
            rowInput.setAttribute("id", "list__id-1");
            rowInput.setAttribute("type", "checkbox");
            rowLabel = document.createElement("label");
            rowLabel.setAttribute("for", "list__itemId1");
            rowLabel.setAttribute("class", "list__label");
            spanClose.classList.add("list__close");
            spanClose.textContent = "Закрыть";
            li.classList.add("list__item");
            li.appendChild(spanClose);
            li.appendChild(rowLabel);
            li.appendChild(rowInput);
            ul.appendChild(li);
            rowLabel.innerHTML += input.value;
            input.value = "";
            rowInput.addEventListener("click", checkboxHandler);
            li.addEventListener("click", closeHandler);
            li.addEventListener("click", editHandler);
          }

          function checkboxHandler(evt) {
            var isChecked = event.target.checked;
            var parent = this.parentElement;
            var text = parent.querySelector(".list__label");

            evt.stopPropagation();
            if (isChecked) {
              text.style.textDecoration = "line-through";
              text.style.textDecorationColor = "red";
              this.style.display = "none";
            }
          }

          function closeHandler(evt) {
            evt.stopPropagation();
            if (evt.target.classList.contains("list__close")) {
              this.remove();
            }
          }
        }

        container.insertBefore(list, nextElem);
      }
      changeCustom(container);
    }
    customFunction();
  }

  window.task2 = customFunctionTask2;
}());

