/*

 */
function customFunctionTask1() {
  const func1 = () => {

    const btn = document.querySelector(".btn-ajax");
    btn.addEventListener('click', () => {
      const API = "https://api.punkapi.com/v2/beers?brewed_before=11-2007&abv_gt=6";
      const API2 = "https://api.punkapi.com/v2/beers/random";
      const API3 = "https://api.punkapi.com/v2/beers?abv_gt=2";
      const API4 = "https://api.punkapi.com/v2/beers";
      const json = response(API, (req) => {
        console.log(req);
      })

    });



    function response(url, fn) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType= "json";
      xhr.addEventListener("readystatechange", function() {
        if (xhr.readyState !== 4) {
          return;
        }
        if (xhr.status !== 200) {
          console.log(xhr.status + ":" + xhr.statusText);
        }
        if (xhr.readyState === 4) {
          fn(xhr.response);
        }
      });
      xhr.send();
    }

  };
  func1();
}

export default customFunctionTask1;

