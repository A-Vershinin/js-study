/*
  Получите и покрасьте в синий цвет следующие элементы:
   - Все <h2>, внутри которых есть тег <i>
*/
function customFunctionTask10() {
  function customFunction() {
    $("h2:has(i)").css("color", "blue");
  }
  customFunction();
}

export default customFunctionTask10;

