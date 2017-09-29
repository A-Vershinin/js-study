  /*
    Пробуем разные штуки из ES6
  */

function testTask() {
  function customFunction() {
    const [name, age = "20"] = ["Иванов", 25];
    // console.log(name, age);


    const someFunc = (data = "ES6") => {
      console.log(`it's ${data} arrow function`);
    };
    // someFunc("ES7");

    const test = (x, y, z) => x + y + z;
    // console.log(test.apply(null, [1, 2, 3]));
    test(...[1, 2, 3]);

    function changeCustom() {
      const obj = {
        key: "sss",
        firstName: "Василий",

        toSting() {
          return `Hello ${firstName}`;
        },
        valueOf() {
          return 1;
        },
      };
      obj.valueOf();
      const options = {
        color: "red",
        width: 400,
        height: 500,
      };

      const { color = "black", width, height } = options;

      const arr = [1, 2, 3];

      // for (let key of arr) {
      //   console.log(key);
      // }

      // добавляем все значений ключей с объекта элементу
      // const elem = document.querySelector(".link");
      // const obj = {
      //   width: "50px",
      //   height: "30px",
      //   margin: "4px",
      // };
      //
      // for (key in obj) {
      //   elem.style[key] = obj[key];
      // }

      const someNewStr = `
        Hello
         ES6 
         syntacs!
         `;
      // console.log(someNewStr);
      // for (let symbol of someNewStr) {
      //   console.log(symbol);
      // }


      // классы
      class Car {
        constructor(name) {
          this.name = name;
          this.wheels = 4;
        }
        drive() {
          console.log("Car is on road");
        }
        stop() {
          console.log("Car is stoped");
        }
      }
      const bmw = new Car("M5");
      bmw.drive();
      bmw.stop();
      // console.log(bmw.name);
      // console.log(bmw.wheels);

      class ElectroCar extends Car {
        constructor() {
          super();
        }
        drive() {
          super.drive()
          console.log("Tesla is using battery to drive");
        }
      }
      const tesla = new ElectroCar();
      tesla.drive();
      tesla.stop();

    }
    changeCustom();
  }
  customFunction();
}

export default testTask;
