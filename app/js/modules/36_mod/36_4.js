/*
  Получите и покрасьте в красный цвет следующие элементы:
  -  Все заголовки, которые следуют сразу за заголовками.
*/
function customFunctionTask4() {
  function customFunction() {
    $(":header + :header").css("color", "blue");
  }
  customFunction();
}

export default customFunctionTask4;

