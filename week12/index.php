<?php
require __DIR__ . '/vendor/autoload.php';
$companies = ["Toyota", "Mercedes", "BMW"];

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

$loader = new FilesystemLoader(__DIR__ . '/templates');
$twig = new Environment($loader);
echo $twig->render('index.html.twig', [
    'companies' => $companies
]);
