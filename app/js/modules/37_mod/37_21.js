/*
  Замените содержимое каждой ссылки (анкоры) на их href.
*/
function customFunctionTask21() {
  function customFunction() {
    $("a.link").each(function() {
      const $elem = $(this);
      $elem.html($elem.attr("href"));
    });
  }
  customFunction();
}

export default customFunctionTask21;

