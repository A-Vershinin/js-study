(function () {
  /*
Выведите на экран таблицу умножения (как в школьной тетради).
  */
  function getTableTask() {
    function getTable() {
      var i;
      var j;
      document.write("<h3>Таблица умножения</h3>");

      for (i = 1; i <= 9; i++) {
        document.write("<div style='float: left; width: 70px;'>");
        for (j = 1; j <= 9; j++) {
          document.write(i + "*" + j + "=" + (i * j) + "<br>");
        }
        document.write("</div>");
      }
    }
    getTable();
  }

  window.task1 = getTableTask;
}());
