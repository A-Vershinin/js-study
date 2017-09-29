
  /*
  Даны два селекта и массив городов. В первом находятся страны, во втором должны появляться города.
  Сделайте так,чтобы когда выбирается определенная страна - в другом селекте появлялись города
  этой страны. В абзац ниже пишите выбранную страну и город через запятую.
  */
  function customFunctionTask20() {
    function customFunction() {
      var selectCountres = document.querySelector("#selectCountres");
      var selectTowns = document.querySelector("#selectTowns");

      function changeCustom(selectCountres, selectTowns) {
        var obj = {
          Aus: ["Мельбурн", "Сидней", "Аделаида", "Брисбен", "Хобарт"],
          Usa: ["Лос-Анжелес", "Нью-Йорк", "Бостон"],
          Ukr: ["Киев", "Харьков", "Львов"],
        };
        var item = document.createElement("p");
        selectCountres.addEventListener("change", selectCountresHandler);
        selectCountres.addEventListener("change", writeToText);
        selectTowns.addEventListener("change", writeToText);

        function selectCountresHandler() {
          var i;
          var checkCountry;
          var newOption;

          selectTowns.innerHTML = "";
          checkCountry = selectCountres.value;
          for (i = 0; i < obj[checkCountry].length; i++) {
            newOption = document.createElement("option");
            newOption.innerHTML = obj[checkCountry][i];
            selectTowns.appendChild(newOption);
          }
        }

        function writeToText() {
          var parent = document.querySelector(".block");
          item.innerHTML = "";
          item.innerHTML = `${selectCountres.options[selectCountres.selectedIndex].text}, ${
            selectTowns.options[selectTowns.selectedIndex].text}`;
          parent.appendChild(item);
        }
      }
      changeCustom(selectCountres, selectTowns);
    }
    customFunction();
  }

  export default customFunctionTask20;

