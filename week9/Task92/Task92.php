<?php
$database = file_get_contents('news.json');
$database = json_decode($database, true);
echo $_GET['category'] === "sport" && $_GET['format'] === "json" ?
    json_encode($database['sport'])
    : json_encode($database['politics']);
