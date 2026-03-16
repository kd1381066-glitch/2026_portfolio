<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "kd1381066@st.kobedenshi.ac.jp";
$subject = "お問い合わせが届きました";

$body = "【お名前】\n".$name."\n\n";
$body .= "【メール】\n".$email."\n\n";
$body .= "【お問い合わせ内容】\n".$message;

$headers = "From: ".$email;

mb_send_mail($to, $subject, $body, $headers);

echo "送信ありがとうございました。";

?>