/*
  Проверьте, что хотя бы одна из ссылок имеет класс www
*/
function customFunctionTask27() {
  function customFunction() {
    $("a").each(function() {
      const $elem = $(this);
      if ($elem.hasClass("www")) {
        console.log("Класс есть");
      } else {
        console.log("Класса нет");
      }
    });
  }
  customFunction();
}

export default customFunctionTask27;
