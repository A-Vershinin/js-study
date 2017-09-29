 /*
  Реализуйте аккордион.
  */
  function customFunctionTask5() {
    function customFunction() {
      var container = document.querySelector(".container");

      function changeCustom(container) {
        var nextElem = container.children[1];
        var accordion = document.querySelector(".accordion");
        setInterval(show, 1000);

        function show() {
          accordion.style.display = "block";
        }

        createAcco(accordion);
        function createAcco(acco) {
          var i;
          var accoBody = acco.querySelectorAll(".acco__inner");
          var triggerClass;

          for (i = 0; i < accoBody.length; i++) {
            accoBody[i].style.height = "0";
          }

          acco.addEventListener("click", accoHandler);
          function accoHandler(evt) {
            var i;
            var target = evt.target;
            evt.preventDefault();

            for (i = 0; i < target.classList.length; i++) {
              if (target.classList[i] === triggerClass) {
                triggerClass = target.classList[i];
              }
            }

            if (!target.classList.contains("acco__trigger")) return;
            if (target.classList.contains(triggerClass)) {
              hideAllAccoInner();
            } else {
              hideAllAccoInner();
              target.classList.add(triggerClass);
              showAccoInner(target.nextElementSibling);
            }
          }

          function hideAllAccoInner() {
            var i;
            var accoTriggers = acco.querySelectorAll(".acco__trigger");

            for (i = 0; i < accoTriggers.length; i++) {
              accoTriggers[i].classList.remove(triggerClass);
            }
            for (i = 0; i < accoBody.length; i++) {
              accoBody[i].style.height = "0";
            }
          }
          function showAccoInner(elem) {
            elem.style.height = `${elem.scrollHeight}px`;
          }
        }
        container.insertBefore(accordion, nextElem);
      }
      changeCustom(container);
    }
    customFunction();
  }

 export default customFunctionTask5;

