/*
  Дана строка. С помощью for-of подсчитайте количество букв 'о' в ней.
*/
function customFunctionTask10() {
  function customFunction() {
    const str = "Дана строка. С помощью for-of подсчитайте количество букв о в ней.";
    let i = 0;

    for (let value of str) {
      if (value === String("о")) {
        i += 1;
      }
    }
    console.log(i);
  }
  customFunction();
}

export default customFunctionTask10;
