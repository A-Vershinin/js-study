/*
  Получите и покрасьте в синий цвет следующие элементы:
   - Четные <li>
*/
function customFunctionTask17() {
  function customFunction() {
    $(".list li:odd").css("color", "blue");
  }
  customFunction();
}

export default customFunctionTask17;

