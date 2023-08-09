
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
    $sql = "INSERT INTO visits (serial, Title, DocName, Issue)
        VALUES (1, '".$_POST['title']."','".$_POST['docname']."', '".$_POST['content']."')";
    if (mysqli_query($conn,$sql)) {
    $data = array("data" => "You Data added successfully");
        echo json_encode($data);
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>
