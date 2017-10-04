/*
  1. Найдите все <p>, исключив из набора <p> с классом some-text.
  2. Найдите первый <li> в родителе с классом list
  3. Найдите последний <li> в наборе у родителя с классом list
  4. Найдите пятый <li> в наборе у родителя с классом list
  5. Найдите предпоследний <li> в наборе у родителя с классом list
  6. Найдите с 3-го по 6-тый <li> в наборе у родителя с классом list
  7. Найдите все <li> у родителя с классом list затем с помощью filter выберите
  все li с классом text-red
*/
function customFunctionTask1() {
  function customFunction() {
    const elems = $("p").not(".some-text");
    console.log(elems);
    console.log("---------------------------");

    const elemFirst = $(".list li").first();
    console.log(elemFirst);
    console.log("---------------------------");

    const elemLast = $(".list li").last();
    console.log(elemLast);
    console.log("---------------------------");

    const elemFive = $(".list li").eq(4);
    console.log(elemFive);
    console.log("---------------------------");

    const elemPrelast = $(".list li").eq(-2);
    console.log(elemPrelast);
    console.log("---------------------------");

    const elemFromTo = $(".list li").slice(3, 6);
    console.log(elemFromTo);
    console.log("---------------------------");

    const elemsRed = $(".list li").filter(".text-red");
    console.log(elemsRed);
    console.log("---------------------------");
  }
  customFunction();
}

export default customFunctionTask1;

