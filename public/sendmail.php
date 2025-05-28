<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

echo "Início do script<br>";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "Recebi um POST<br>";
    $nome = $_POST['nome'] ?? '';
    $email = $_POST['email'] ?? '';
    $mensagem = $_POST['mensagem'] ?? '';

    echo "Nome: $nome<br>Email: $email<br>Mensagem: $mensagem<br>";

    $to = "contato@jrtechnologysolutions.com.br";
    $subject = "Nova mensagem do site";
    $body = "Nome: $nome\nEmail: $email\nMensagem:\n$mensagem";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "ok";
    } else {
        echo "Erro ao enviar e-mail via PHP mail().<br>";
        if (function_exists('mail')) {
            echo "A função mail() existe.<br>";
        } else {
            echo "A função mail() NÃO existe.<br>";
        }
    }
} else {
    echo "Método não permitido";
}
?>