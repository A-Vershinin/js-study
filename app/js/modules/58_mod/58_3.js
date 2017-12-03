/*
  Стандартная функция асинхронной загрузки данных по url
  Функция httpGet(url) будет возвращать промис, который при успешной
  загрузке данных с url будет переходить в fulfilled с этими данными,
  а при ошибке – в rejected с информацией об ошибке:
 */
function customFunctionTask1() {
  function customFunction() {

    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const btn = document.querySelector("#btn1");


    btn.addEventListener("click", () => {
      httpGet(url)
        .then(
          response => console.log(`Fulfilled: ${response}`),
          error => console.log(`Rejected: ${error}`)
        );
    });

    function httpGet(url) {
      return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
          if (this.status == 200) {
            resolve(this.response);
          } else {
            let error = new Error(this.statusText);
            error.code = this.status;
            reject(error);
          }
        };
        xhr.onerror = function() {
          reject(new Error("Network Error"));
        };
        xhr.send();
      });
    }


  }
  customFunction();
}

export default customFunctionTask1;

