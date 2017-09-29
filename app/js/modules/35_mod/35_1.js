

  /*

  */
  function customFunctionTask1() {
    function customFunction() {
      const container = document.querySelector(".container");
      //
      const [name, age = "20"] = ["Иванов", 25];
      console.log(name, age);


      const someFunc = (data = "ES6") => {
        console.log(`it's ${data} arrow function`);
      };
      someFunc("ES7");

      const test = (x, y, z) => x + y + z;
      // console.log(test.apply(null, [1, 2, 3]));

      test(...[1, 2, 3]);


      function changeCustom(container) {
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

        for (const key of arr) {
          console.log(key);
        }
      }
      changeCustom(container);
    }
    customFunction();
  }

  export default customFunctionTask1;
