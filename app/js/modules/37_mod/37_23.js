/*
  Вставьте в атрибут title каждой ссылки ее анкор.
*/
function customFunctionTask23() {
  function customFunction() {
    $("a.link").each(function() {
      const $elem = $(this);
      $elem.attr("title", $elem.attr("href"));
    });
  }
  customFunction();
}

export default customFunctionTask23;

