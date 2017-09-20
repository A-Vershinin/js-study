;(function () {
  /*
   задача – скопировать в существующий объект свойства
   из одного или нескольких других.
  */
  function taskCopyObjectProp() {
    var vasya = {
      age: 21,
      name: "Вася",
      surname: "Петров"
    };
    var user = {
      isAdmin: false,
      isEmailConfirmed: true
    };
    var student = {
      university: "My university"
    };

    function copy(dst) {
      var i;
      var arg;
      var key;
      var userClone;

      for (i = 1; i < arguments.length; i += 1) {
        arg = arguments[i];
        for (key in arg) {
          dst[key] = arg[key];
        }
      }
      return dst;
    }

    copy(vasya, user, student);
    /*  добавляем новые свойства объекту Вася с объектов
    user и student;
    */
    console.log(vasya); // Объект с добавленными свойствами
    userClone = copy({}, user);
    /*  клон объекта user которому можно добавить новые
    свойства не измения старые, которые уже есть
    */
    userClone.isHappy = true; // добавили новое свойство
    copy(vasya, userClone, student);
    /* Скопировали все свойства с других объектов в
    Васю с дополнительным свойством happy  */
    console.log(vasya);
  }

  window.task14 = taskCopyObjectProp;
}());
