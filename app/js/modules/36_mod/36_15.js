/*
  Получите и покрасьте в синий цвет следующие элементы:
   - Все <li> больше 5-той и саму 5-ю тоже.
*/
function customFunctionTask15() {
  function customFunction() {
    $(".list li:gt(3)").css("color", "blue");
  }
  customFunction();
}

export default customFunctionTask15;

