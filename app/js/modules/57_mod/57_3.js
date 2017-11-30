/*
Дана страница с товарами product.html. На ней по загрузке расположено 12 товаров по 3 в ряд.
Сделайте так, чтобы при прокрутке страницы до самого низа аяксом подгружалось еще 12 товаров.
Товары расположены на страницах ajax1.html, alax2.html и так далее. Как только страницы с
товаром закончатся - страница product.html должна выдать сообщение об этом
 */
function customFunctionTask1() {
  const func1 = () => {

    let items = $(".products-ajax li");
    let list = $(".products__list");
    let numberItems = 3;
    let inProgress = false;

    $(window).on('scroll', loadHandler);
    function loadHandler() {
      if ($(window).scrollTop() + $(window).height() >= $(document).height() - 50 && !inProgress) {
        $.ajax({
            url: "ajaxPage.html",
            data: list,
            beforeSend: function () {
              inProgress: true;
            }})
          .done(function(data) {
            console.log("Данные подгружены");
            // list.append(data);
            inProgress = false;
          })
          .fail(function(data) {
            console.log("Ошибка загрузки", data);
          });
      }
    }
  };
  func1();
}

export default customFunctionTask1;

