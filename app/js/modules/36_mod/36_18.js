/*
  Получите и покрасьте в синий цвет следующие элементы:
   - Нечетные <li> в каждой <ul>
*/
function customFunctionTask18() {
  function customFunction() {
    $("ul li:even").css("color", "blue");
  }
  customFunction();
}

export default customFunctionTask18;

