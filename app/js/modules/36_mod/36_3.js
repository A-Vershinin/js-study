/*
  Получите и покрасьте в красный цвет следующие элементы:
  -  Все заголовки НЕ с классом test
*/
function customFunctionTask3() {
  function customFunction() {
    $(":header:not(.test)").css("color", "blue");
  }
  customFunction();
}

export default customFunctionTask3;

