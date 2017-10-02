/*
  Добавьте всем li класс www, если его нет, и удалите, если есть.
*/
function customFunctionTask26() {
  function customFunction() {
    $("li").each(function() {
      const $elem = $(this);
      if ($elem.hasClass("www")) {
        $elem.removeClass("www");
      } else {
        $elem.addClass("www");
      }
    });
  }
  customFunction();
}

export default customFunctionTask26;

