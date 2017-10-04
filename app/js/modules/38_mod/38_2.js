/*
  1. Найдите первый элемент, который стоит непосредственно за элементом с классом text-red.
  2. Найдите первый элемент, который стоит непосредственно перед элементом с классом text-red.
  3. Найдите все элементы, которые идут непосредственно за элементом с классом text-red
  4. Найдите все элементы, которые идут непосредственно перед элементом с классом text-red
  5. Найдите все элементы, которые лежат между элементом с классом list-elem и элементом
  с классом text-red через nextUntil.
  6. Найдите все элементы, которые лежат между элементом с классом list-elem и элементом
  с классом text-red через prevUntil
  7. Найдите всех соседей <li> с классом text-red.
  8. Найдите всех соседей <li> с классом text-red, которые (соседи) имеют класс test.
  9. Найдите всех соседей <li> с классом text-red, но не соседа с классом test
*/
function customFunctionTask2() {
  function customFunction() {
    const elemNext = $(".text-red").next();
    console.log("------------1--------------");
    console.log(elemNext);

    const elemPrev = $(".text-red").prev();
    console.log("-------------2-------------");
    console.log(elemPrev);

    const elemsAfterAll = $(".text-red").nextAll();
    console.log("-------------3-------------");
    console.log(elemsAfterAll);

    const elemsPrevAll = $(".text-red").prevAll();
    console.log("-------------4-------------");
    console.log(elemsPrevAll);

    const elemsNextUntil = $(".list-elem").nextUntil(".text-red");
    console.log("-------------5-------------");
    console.log(elemsNextUntil);

    const elemsPrevUntil = $(".text-red").prevUntil(".list-elem");
    console.log("-------------6-------------");
    console.log(elemsPrevUntil);

    const elemsSib = $(".text-red").siblings();
    console.log("-------------7-------------");
    console.log(elemsSib);

    const elemsSibClass = $(".text-red").siblings("test");
    console.log("-------------8-------------");
    console.log(elemsSibClass);

    const elemsSibNotClass = $(".text-red").siblings(":not(test)");
    console.log("-------------9-------------");
    console.log(elemsSibNotClass);
  }
  customFunction();
}

export default customFunctionTask2;

