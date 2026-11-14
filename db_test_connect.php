<?php
declare(strict_types=1);

// Ошибки MySQL превращаются в исключения — их видно и можно ловить try/catch
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $db = new mysqli('localhost', 'cz503219_surfing', 'dJ82Sxy3', 'cz503219_surfing', 3306);
    $db->set_charset('utf8mb4'); // без этого кириллица станет ??????
    echo 'Подключено';
    
} catch (mysqli_sql_exception $e) {
    exit('Нет подключения к БД: ' . $e->getMessage());
}