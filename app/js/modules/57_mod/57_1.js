/*
   Дана страница ajax.html. В ней есть блок #content и кнопка вне этого блока. Сделайте так,
   чтобы по нажатию на кнопку в #content аяксом подгружалось содержимое страницы index.html.
 */
function customFunctionTask1() {
   const func1 = () => {

    const btn = $(".btn");
    btn.on('click', handlerBtn);

    function handlerBtn() {
      $.ajax({
        url: 'index.html',
        method: 'get'
      })
        .done(function(text) {
          $('.ajax').append(text);
        })
        .fail(function(text) {
          $('.ajax').html('Ошибка загрузки');
        });
    }
  };
  func1();
}

export default customFunctionTask1;

