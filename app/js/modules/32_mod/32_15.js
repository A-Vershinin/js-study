
  /*
   Именованные аргументы – альтернативная техника
   работы с аргументами, которая вообще не использует
   псевдомассив arguments
	*/
  function showHowUseDefaultOptions() {
    var opts;

    function showWarning(options) {
      var width = options.width || 200;
      // или параметр с объекта options или по умолчанию 200
      var height = options.height || 100;
      var contents = options.contents || "Предупреждение";
      console.log(width, height, contents);
    }
    // вызов функции с значениями в переменных по умолчанию,
    // в одной переменной задали своё значение
    showWarning({
      contents: "Вы вызвали функцию",
    });
    // создали объект с настройками и передаём его в функцию
    opts = {
      width: 400,
      height: 200,
      contents: "Текст",
    };
    showWarning(opts);
  }

  export default showHowUseDefaultOptions;

