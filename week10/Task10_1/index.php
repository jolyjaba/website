<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <?php
    $database = new mysqli('localhost', 'root', '', 'cars');
    if ($result = mysqli_query($database, "SELECT * FROM cars")) {
        if (mysqli_num_rows($result)) {
            echo '<div class="container">';
            while ($row = mysqli_fetch_array($result)) {
                echo '<div class="car">
                        <img src="' . $row['image'] . '" alt="' . $row['model'] . '">
                        <div class="description">
                            <div class="model">' . $row['maker'] . ' ' . $row['model'] . '</div>
                            <div class="price">Price: ' . $row['price'] . '$</div>
                        </div>
                    </div>';
            }
            echo '</div>';
        }
    }
    $database->close();
    ?>
</body>

</html>