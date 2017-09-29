 /*
  Реализуйте вкладки - нажимая на каждую вкладку мы будем видеть ниже текст, соответствующий
  этой вкладке.
  */
  function customFunctionTask4() {
    function customFunction() {
      var container = document.querySelector(".container");

      function changeCustom(container) {
        var nextElem = container.children[1];
        var tabs = document.querySelector(".tabs");
        var activeClass = "active";

        setInterval(show, 1000);
        function show() {
          tabs.style.display = "block";
        }

        createTabs(tabs, activeClass);
        function createTabs(tabs, activeClass) {
          var i;
          var btns = tabs.firstElementChild.children; // коллекция elem кнопки
          var tabsContent = tabs.lastElementChild.children; // коллекция табов с контентом
          for (i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", btnsHandler);
          }

          function btnsHandler(evt) {
            var i;
            var targetItm = evt.target;
            var btnsId = targetItm.dataset.id;
            if (!targetItm.tagName === "LI") return;
            if (btnsId) {
              switchTab(btnsId);
            }
            for (i = 0; i < btns.length; i++) {
              btns[i].classList.remove(activeClass);
            }
            targetItm.classList.add(activeClass);
          }

          function switchTab(id) {
            var i;
            var elem;
            var elemId;
            var showTab;
            for (i = 0; i < tabsContent.length; i++) {
              elemId = tabsContent[i].getAttribute("id");
              showTab = elemId === id;
              elem = tabsContent[i].classList.remove(activeClass);
              if (showTab) {
                tabsContent[i].classList.add(activeClass);
              }
            }
          }
        }
        container.insertBefore(tabs, nextElem);
      }
      changeCustom(container);
    }
    customFunction();
  }

 export default customFunctionTask4;

