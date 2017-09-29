
  function summaAllArguments() {
    /*
		Напишите функцию sum(...), которая возвращает
		сумму всех своих аргументов:
		*/
    function suma() {
      var result = 0;
      var i;
      for (i = 0; i < arguments.length; i += 1) {
        result += arguments[i];
      }
      return result;
    }

    console.log(suma(1));
    console.log(suma(1, 2));
    console.log(suma(1, 2, 3));
  }

  export default summaAllArguments;

