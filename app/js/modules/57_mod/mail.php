<?php
// если в массиве $_POST есть ключ name и его значение не равно пустоте, то
if ((isset($_POST['name'])) && (!empty($_POST["name"]))) {
    // присвоить $result['name'] значение $_POST['name']
    $result['name'] = $_POST['name'];
} else {
    // иначе, $result['name'] присвоить указанную строку
    $result['name'] = 'Вы не ввели поле name!';
}
// если в массиве $_POST есть ключ message и его значение не равно пустоте, то
if ((isset($_POST['message']))&& (!empty($_POST["message"]))) {
    // присвоить $result['message'] значение $_POST['message']
    $result['message'] = $_POST['message'];
} else {
    // иначе, $result['message'] присвоить указанную строку
    $result['message'] = 'Вы не ввели поле message!';
}
// преобразовать массив $result в json, а затем вывести его с помощью echo
echo json_encode($result);
?>