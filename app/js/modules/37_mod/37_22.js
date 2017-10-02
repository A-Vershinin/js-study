/*
  Вставьте после содержимого каждой ссылки их href в круглых скобках.
*/
function customFunctionTask22() {
  function customFunction() {
    $("a.link").each(function() {
      const $elem = $(this);
      $elem.append($elem.attr("href"));
    });
  }
  customFunction();
}

export default customFunctionTask22;

