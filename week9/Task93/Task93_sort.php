<?php
$database = file_get_contents("cars.json");
$database = json_decode($database, true);
echo '<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        img {
            width: 150px;
            height: 150px;
        }

        .container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .car {
            width: 400px;
            border: 1px solid red;
            border-radius: 5px;
            display: flex;
            margin: 20px;
            position: relative;
        }

        .model {
            font-weight: bold;
            font-size: 20px;
        }

        .price {
            color: green;
        }

        .year {
            position: absolute;
            bottom: 0;
            font-weight: bold;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
';
$maker = $_GET['maker'];
$sort = $_GET['sort'];
if ($sort === 'price') {
    usort($database[$maker], function ($a, $b) {
        global $sort;
        return strcmp($b[$sort], $a[$sort]);
    });
    for ($i = 0; $i < count($database[$maker]); $i++) {
        if ($database[$maker][$i]['price'] > "20.000") {
            echo '<div class="car">
                <img src="BMW_X5.jpg" alt="BMW_X5">
                <div class="des">
                    <p class="model">' . $database[$maker][$i]['model'] . '</p>
                    <p class="price">' . $database[$maker][$i]['price'] . '$</p>
                    <p class="year">' . $database[$maker][$i]['year'] . ' years</p>
                </div>
            </div>';
        }
    }
} else {
    $year = array();
    foreach ($database[$maker] as $key => $row) {
        $year[$key] = $row['year'];
    }
    array_multisort($year, SORT_DESC, $database[$maker]);
    foreach ($year as $key => $val) {
        if ($val > 7) {
            echo '<div class="car">
                <img src="BMW_X5.jpg" alt="BMW_X5">
                <div class="des">
                    <p class="model">' . $database[$maker][$key]['model'] . '</p>
                    <p class="price">' . $database[$maker][$key]['price'] . '$</p>
                    <p class="year">' . $database[$maker][$key]['year'] . ' years</p>
                </div>
            </div>';
        }
    }
}
echo '<a href="Task93.html">Home</a>
<a href="Task93.php?maker=Toyota">Toyota</a>
<a href="Task93.php?maker=BMW">BMW</a><br>
<a href="Task93_sort.php?maker=' . $maker . '&sort=year">Old cars(More than 7 years)</a>
<a href="Task93_sort.php?maker=' . $maker . '&sort=price">Expensive cars(more than 20.000$)</a>
</div>
</body>
</html>';
