/*
  Получите и покрасьте в синий цвет следующие элементы:
   - Все <li> меньше  5-той (отсчет с нуля в jQuery!)
*/
function customFunctionTask14() {
  function customFunction() {
    $(".list li:lt(5)").css("color", "blue");
  }
  customFunction();
}

export default customFunctionTask14;

