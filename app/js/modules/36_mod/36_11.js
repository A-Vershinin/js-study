/*
  Получите и покрасьте в синий цвет следующие элементы:
   - Все <h2>, которые непосредственно содержат <i>
*/
function customFunctionTask11() {
  function customFunction() {
    $("h2 > i ").css("color", "blue");
  }
  customFunction();
}

export default customFunctionTask11;

