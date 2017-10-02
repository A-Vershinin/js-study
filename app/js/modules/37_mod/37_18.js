/*
  Получите атрибут href всех ссылок и последовательно выведите в консоль.
*/
function customFunctionTask18() {
  function customFunction() {
    $("a.link").each(function () {
      console.log($(this).attr("href"));
    });
  }
  customFunction();
}

export default customFunctionTask18;

