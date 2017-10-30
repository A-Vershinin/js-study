/*
 Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод
 isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет.
 Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь
 следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод
 isPhone для проверки телефона:
 */
function customFunctionTask1() {
  function customFunction() {
    class Validator {
      constructor(str) {
        this.str = str;
      }
      getStr() {
        return this.str;
      }
      setStr(str) {
        this.str = str;
      }
      isEmail(str) {
        return /^[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}$/.test(str);
      }
      isDomain(str) {
        return /^([a-z.-_]+\.[a-z]{2,3})$/.test(str);
      }
      isDate(str) {
        return /^[0-31]{}[.]{1}[0-12]{2}[.]{1}[0-9]{4}$/.test(str);
      }
      isPhone(str) {
        return /^(?!\+.*\(.*\).*\-\-.*$)(?!\+.*\(.*\).*\-$)(\+[0-9]{3} \([0-9]{2}\) [0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2})$/.test(str);
      }
    }
    const newStr1 = new Validator();
    console.log("isEmail ", newStr1.isEmail("phphtml@mail.ru"));
    console.log("isDomain ", newStr1.isDomain("phphtml.net"));
    console.log("isDate ", newStr1.isDate("12.05.2020"));
    console.log("isPhone ", newStr1.isPhone("+375 (29) 817-68-92"));
  }
  customFunction();
}

export default customFunctionTask1;
