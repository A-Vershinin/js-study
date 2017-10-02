/*
  Получите и покрасьте в красный цвет следующие элементы:
  - Все <h2> НЕ с классом test.
*/
function customFunctionTask2() {
  function customFunction() {
    $("h2:not(.test)").css("color", "blue");
  }
  customFunction();
}

export default customFunctionTask2;

