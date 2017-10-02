/*
  Получите и покрасьте в синий цвет следующие элементы:
  -  Все пустые элементы.
*/
function customFunctionTask6() {
  function customFunction() {
    $(":empty").css("color", "blue");
  }
  customFunction();
}

export default customFunctionTask6;

