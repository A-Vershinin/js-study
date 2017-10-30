/*
 Реализуйте класс MyString, который будет иметь следующие методы:
 метод reverse(), который параметром принимает строку, а возвращает ее в
 перевернутом виде, метод ucFirst(), который параметром принимает строку, а
 возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
 который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */
function customFunctionTask1() {
  function customFunction() {
    class MyString {
      constructor(str) {
        this.str = str;
      }
      getStr() {
        return this.str;
      }
      setStr(str) {
        this.str = str;
      }
      reverse(str) {
        return this.getStr().split("").reverse().join("");
      }
      ucFirst(str) {
        return this.getStr().charAt(0).toUpperCase() + this.getStr().substr(1);
      }
      ucWords(str) {
        const newArr = this.getStr()
          .split(" ")
          .map(function(el) {
            return el.charAt(0).toUpperCase() + el.slice(1);
          })
          .join(" ");
        return newArr;
      }
    }

    const newStr = new MyString("hello world javascript!");
    console.log(newStr.reverse());
    console.log(newStr.ucFirst());
    console.log(newStr.ucWords());
  }
  customFunction();
}

export default customFunctionTask1;
