<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

echo "Início do script<br>";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "Recebi um POST<br>";
    echo "Dados recebidos:<br>";
    print_r($_POST);
    exit;
} else {
    echo "Método não permitido";
}
?> 