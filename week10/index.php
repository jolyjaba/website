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
    if ($database->connect_error) {
        die("Connection failed: " . $database->connect_error);
    }
    if ($result = mysqli_query($database, "SELECT * FROM cars")) {
        if (mysqli_num_rows($result) > 0) {
            echo '<div class="container">';
            while ($row = mysqli_fetch_array($result)) {
                echo '<div class="car">
                        <img src="' . $row['image'] . '" alt="' . $row['model'] . '">
                        <div class="description">
                            <div class="model">' . $row['maker'] . ' ' . $row['model'] . '</div>
                            <div class="year">Year: ' . $row['year'] . '</div>
                            <div class="price">Price:</div>
                        </div>
                    </div>';
                echo "<tr>";
                echo "<td>" . $row['id'] . "</td>";
                echo "<td>" . $row['maker'] . "</td>";
                echo "<td>" . $row['model'] . "</td>";
                echo "<td>" . $row['price'] . "</td>";
                echo "</tr>";
            }
            echo '</div>';
            mysqli_free_result($result);
        } else {
            echo "No records matching your query were found.";
        }
    }
    ?>
    <div class="container">
        <div class="car">
            <img src="Camry_50.png" alt="Camry_50">
            <div class="description">
                <div class="model">Toyota Camry 50</div>
                <div class="year">Year:</div>
                <div class="price">Price:</div>
            </div>
        </div>
        <div class="car">
            <img src="Camry_50.png" alt="Camry_50">
            <div class="description">
                <div class="model">Toyota Camry 50</div>
                <div class="year">Year:</div>
                <div class="price">Price:</div>
            </div>
        </div>
        <div class="car">
            <img src="Camry_50.png" alt="Camry_50">
            <div class="description">
                <div class="model">Toyota Camry 50</div>
                <div class="year">Year:</div>
                <div class="price">Price:</div>
            </div>
        </div>
    </div>
</body>

</html>