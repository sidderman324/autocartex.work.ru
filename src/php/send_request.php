<?php
/* Данные из массива POST */
if (isset($_POST["model"])) { $model = $_POST["model"];} else {$model = "";}
if (isset($_POST["yourName"])) { $customer_name = $_POST["yourName"]; } else {$customer_name = "";}
if (isset($_POST["phoneNumber"])) { $customer_phone = $_POST["phoneNumber"]; } else {$customer_phone = "";}
if (isset($_POST["sourceForm"])) { $form_source = $_POST["sourceForm"]; } else {$form_source = "";}
if (isset($_POST["user_mail"])) { $user_mail = $_POST["user_mail"]; } else {$user_mail = "";}
if (isset($_POST["user_message"])) { $user_message = str_replace(" ",'', $_POST["user_message"]); } else {$user_message = "";}

$previous_page = $_SERVER["HTTP_REFERER"];
/* Дубль на почту */
$mail_to = "syd.phoenix@gmail.com"; //alexeykonoplev2@yandex.ru
$mail_from = "Jblarea.ru";
$mail_body = "Модель: " . $model . "\n" .
			"Имя клиента: " . $customer_name . "\n" .
			"Телефон клиента: " . $customer_phone . "\n" .
			"Почта клиента: " . $user_mail . "\n" .
			"Источник формы: " . $form_source . "\n" .
			"Сообщение от пользователя: " . $user_message;

$result = mail ($mail_to, $mail_from, $mail_body);

/* Возврат на страницу с которой пришли если не удалось отправить заявку или на страницу холдинга в случае успеха */
if (!$result) { echo "<p>Сообщение не отправлено</p><p>Попробовать еще раз: <a href='" . $previous_page . "'>Попробовать еще раз...</a></p>"; }
else {
	header("location:" . $previous_page);
	exit();
}

?>