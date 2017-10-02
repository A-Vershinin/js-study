/*
  каждый <h2> замените на его содержимое, стоящее в абзаце
*/
function customFunctionTask13() {
  function customFunction() {
    $("h2").replaceWith($("h2").text().wrap("p"));
  }
  customFunction();
}

export default customFunctionTask13;

