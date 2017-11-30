/*
Дана страница ajaxPage.html. В ней есть блок .ajax и N кнопок вне этого блока. Каждая кнопка
 привязана с своей странице - первая кнопка к ajax1.html, вторая к alax2.html и так далее.
 Сделайте так, чтобы по нажатию на любую кнопку в #content аяксом подгружалось содержимое
 соответствующей страницы.
 */
function customFunctionTask1() {
  const func1 = () => {

    const btn = $(".btn");
    btn.on('click',  handlerBtn);

    function handlerBtn() {
      $.get($(this).attr("data-page") + ".html")
        .done(function(data) {
          $('.ajax').html(data);
        })
        .fail(function(data) {
          $('.ajax').html('Ошибка загрузки');
        });
    }
  };
  func1();
}

export default customFunctionTask1;

