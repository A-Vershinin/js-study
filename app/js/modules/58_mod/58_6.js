/*
  Пример использования промисов при получении визы.
 */
function customFunctionTask1 () {
  function customFunction () {

    function applyForVisa(documents) {
      console.log("Обработка заявления...");
      let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
          Math.random() > 0.3 ? resolve({}) : reject("В визе отказано: не хватает документов");
        }, 2000)
      });
      return promise;
    }

    function getVisa(visa) {
      console.log("Виза получена");
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(visa), 2000);
      });
    }

    function bookHotel(visa) {
      console.log(visa);
      console.log("Бронируем отель");
      return new Promise((resolve, reject) => resolve({}));

    }

    function buyTickets(booking) {
      console.log("Покупаем билет");
      console.log("Бронь", booking);
    }

    applyForVisa({})
      .then(getVisa)
      .then(bookHotel)
      .then(buyTickets)
      .catch(error => console.error(error));



  }

  customFunction();
}

export default customFunctionTask1;

