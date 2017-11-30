/*
  Дан url и кнопка на странице. Получите всех пользователей и выведите посты первого пользователя.
   Два запроса. Один получаем все, второй вложенный получаем первого
 */
function customFunctionTask1() {
  const func1 = () => {
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';
    const userUrlPost = 'https://jsonplaceholder.typicode.com/posts?userId=';

    const container = document.querySelector("#result");
    const btn = document.querySelector(".btn-ajax");

    btn.addEventListener("click", () => {
      loadUsers((error) => {
        if (error) {
          console.log(`Произошла ошибка! ${error}`)
        } else {
          console.log("Посты выведены!");
        }
      });
    });

    function loadUsers(cb) {
      const usersRequest = new XMLHttpRequest();
      usersRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
      usersRequest.addEventListener('readystatechange', () => {
        if (usersRequest.readyState !== usersRequest.DONE) {return;}
        if (usersRequest.status !== 200) {
          return cb('Не удалось загрузить пользователей');
        }
        const [{ id, name }] = JSON.parse(usersRequest.responseText);
        const urlUser = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

        const postsRequest = new XMLHttpRequest();
        postsRequest.open('GET', urlUser);
        postsRequest.addEventListener('readystatechange', () => {
          if (postsRequest.readyState !== postsRequest.DONE) {return;}
          if (postsRequest.status !== 200) {
            return cb('Не удалось загрузить первого пользователя');
          }
          const posts = JSON.parse(postsRequest.responseText);
          const div = document.createElement('div');
          const header = document.createElement('h1');
          header.textContent = name;
          div.appendChild(header);
          const ul = document.createElement('ul');
          posts.forEach(({ title }) => {
            const li = document.createElement('li');
            li.textContent = title;
            ul.appendChild(li);
          });
          div.appendChild(ul);
          container.appendChild(div);
          // ещё один запрос
          const commentRequest = new XMLHttpRequest();
          const urlComment = "https://jsonplaceholder.typicode.com/posts/1/comments";
          commentRequest.open('GET', urlComment);
          commentRequest.addEventListener("readystatechange", () => {
            if (commentRequest.readyState !== commentRequest.DONE) {return;}
            if (commentRequest.status !== 200) {
              return cb('Не удалось загрузить комментарии');
            }
            const comments = JSON.parse(commentRequest.responseText);
            console.log(comments);
            cb();
          });
          // конец
          commentRequest.send();
        });
        postsRequest.send();
      });
      usersRequest.send();
    }
  };
  func1();
}

export default customFunctionTask1;

