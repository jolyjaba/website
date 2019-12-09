<?php
$database = file_get_contents('news.json');
$database = json_decode($database, true);
echo $_GET['category'] === "sport" ?
    $database['sport'][0] . "<hr>" . $database['sport'][1] . "<hr>"
    : $database['politics'][0] . "<hr>" . $database['politics'][1] . "<hr>";
