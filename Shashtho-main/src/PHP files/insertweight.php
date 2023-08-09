<?php
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "shashto";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
    $sql = "INSERT INTO weight (TrackerID,Date3, Value3)
        VALUES (1,'".$_POST['myDate1']."', '".$_POST['myValue1']."')";
    if (mysqli_query($conn,$sql)) {
    $data = array("data" => "You Data added successfully");
        echo json_encode($data);
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>
