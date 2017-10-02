/*
  Найдите абзацы <p>, обернутые дивами <div>, и удалите эти дивы
*/
function customFunctionTask5() {
  function customFunction() {
    $("div > p").unwrap("div");
  }
  customFunction();
}

export default customFunctionTask5;

