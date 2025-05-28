<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'] ?? '';
    $email = $_POST['email'] ?? '';
    $mensagem = $_POST['mensagem'] ?? '';

    $to = "contato@jrtechnologysolutions.com.br";
    $subject = "Nova mensagem do site";
    $body = "Nome: $nome\nEmail: $email\nMensagem:\n$mensagem";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "ok";
    } else {
        // Mostra erro detalhado
        error_log('Erro ao enviar e-mail via PHP mail()');
        echo "erro_mail";
    }
} else {
    echo "metodo_nao_permitido";
}
?>