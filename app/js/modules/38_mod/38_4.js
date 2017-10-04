/*
  1.  Найдите все <p>, проверьте, что среди найденных есть <p> с классом text-red.
  2. Найдите все элементы непосредственно стоящие после заголовков. Если найденный
  элемент - абзац, добавьте ему в конец содержимое заголовка над ним
  3. Найдите все элементы непосредственно стоящие после заголовков. Если найденный элемент -
  не абзац, вставьте под заголовком абзац с таким же содержимым, как и заголовок.
*/
function customFunctionTask4() {
  function customFunction() {
    const elemsIS = $("p").is(".text-red");
    console.log("------------1--------------");
    console.log(elemsIS);

    const elemsPrevHeaders = $(":header").nextAll().each(function () {
      if ($(this).is("p")) {
        $(this).append($(":header").html());
      }
    });
    console.log("------------2--------------");
    console.log(elemsPrevHeaders);

    const elemsAfterHeaders = $(":header").nextAll().each(function () {
      if ($(this).is("p")) {
        $(":header").after("<p>" + $(":header").html() + "</p>");
      }
    });
    console.log("------------3--------------");
    console.log(elemsAfterHeaders);
  }
  customFunction();
}

export default customFunctionTask4;

