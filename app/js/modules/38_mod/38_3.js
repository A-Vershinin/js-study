/*
  1. Найдите родителя элемента с классом text-red.
  2. Найдите родителей всех тегов <i> и сделайте их красным цветом.
  3. Найдите ближайших дивов-родителей всех тегов <i> и сделайте их синим цветом.
  4. Найдите все <p> с классом .some-text, сделайте их зелёного цвета, затем среди найденных
  элементов найдите элементы с классом .text-red и поставьте им размер шрифта в 30px.
  5. Найдите все элементы с классом .some-text, сделайте их зелёного цвета, затем среди найденных
  элементов найдите абзацы и поставьте им в конец текст '!'
  6. Найдите все абзацы <p> с классом .some-text, поставьте им в начало текст '!', а в конец
  текст '!!', затем добавьте к этим абзацам еще и <a> и покрасьте эти абзацы и
  ссылки в другой цвет
  7.  Найдите все <p>, проверьте, что среди найденных есть <p> с классом text-red.
  8. Найдите все элементы непосредственно стоящие после заголовков. Если найденный
  элемент - абзац, добавьте ему в конец содержимое заголовка над ним
  9. Найдите все элементы непосредственно стоящие после заголовков. Если найденный элемент -
  не абзац, вставьте под заголовком абзац с таким же содержимым, как и заголовок.
*/
function customFunctionTask3() {
  function customFunction() {
    const elemParent = $(".text-red").parent();
    console.log("------------1--------------");
    // console.log(elemParent);

    const elemParentRed = $("i").parent().css("color", "red");
    console.log("------------2--------------");
    // console.log(elemParentRed);

    const elemClosest = $("i").closest("div").css("color", "blue");
    console.log("------------3--------------");
    // console.log(elemClosest);

    const elemsByColor = $("p.some-text").css("color", "green").find(".text-red").css("fontSize", "30px");
    console.log("------------4--------------");
    console.log(elemsByColor);

    const elemsByApend = $("p.some-text").css("color", "green").find("p").append("!");
    console.log("------------5--------------");
    console.log(elemsByApend);

    const elemsAdd = $("p.some-text").prepend("!").append("!?").add("a").css("color", "purple");
    console.log("------------6--------------");
    console.log(elemsAdd);


  }
  customFunction();
}

export default customFunctionTask3;

