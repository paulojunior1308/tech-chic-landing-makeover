<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer-master/src/Exception.php';
require __DIR__ . '/PHPMailer-master/src/PHPMailer.php';
require __DIR__ . '/PHPMailer-master/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.appuni.com.br';
    $mail->SMTPAuth = true;
    $mail->Username = 'contato@jrtechnologysolutions.com.br'; // seu e-mail completo
    $mail->Password = 'SENHA'; // sua senha do e-mail
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('contato@jrtechnologysolutions.com.br', 'Contato Site');
    $mail->addAddress('contato@jrtechnologysolutions.com.br');

    $mail->isHTML(false);
    $mail->Subject = 'Nova mensagem do site';
    $mail->Body    = "Nome: {$_POST['name']}\nEmail: {$_POST['email']}\nMensagem:\n{$_POST['message']}";

    $mail->send();
    echo 'ok';
} catch (Exception $e) {
    echo "Erro ao enviar: {$mail->ErrorInfo}";
}
?>