/*
Дана страница ajaxPage.html. В ней есть блок #content и кнопка вне этого блока. Дан также
файл data.json, в нем хранится массив пользователей в формате JSON. Сделайте так, чтобы по
нажатию на кнопку в #content появился список пользователей из ajax.json в виде списка <ul> -
каждый пользователь в своем <li>
 */

function customFunctionTask1() {
  let json = `[
    {
      "id": 1,
      "title": "Вася Пупкин"
    },
    {
      "id": 2,
      "title": "Иван Иванов"
    },
    {
      "id": 3,
      "title": "Петя Иванов"
    }
  ]`;

  let data = JSON.parse(json);

  const func1 = () => {
    $(".btn-ajax").on("click", () => {
      let list = $("<ul/>");

      $(data).each(function (index, elem) {
        let text = "<li>" + elem.title + "</li>";
        list.append(text)
      });
      $(".container").append(list);
    });
  };
  func1();
}

export default customFunctionTask1;

