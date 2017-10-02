/*
  Получите и покрасьте в синий цвет следующие элементы:
   - Третью <li>
*/
function customFunctionTask12() {
  function customFunction() {
    $(".list li:eq(3)").css("color", "blue");
  }
  customFunction();
}

export default customFunctionTask12;

