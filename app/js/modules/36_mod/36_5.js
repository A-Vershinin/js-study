/*
  Получите и покрасьте в красный цвет следующие элементы:
  -  Все заголовки с классом test, которые следуют сразу за заголовками с классом test.
*/
function customFunctionTask5() {
  function customFunction() {
    $(":header.test + :header.test").css("color", "blue");
  }
  customFunction();
}

export default customFunctionTask5;

