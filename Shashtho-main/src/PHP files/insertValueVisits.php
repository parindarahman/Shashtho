<?php
$link=mysqli_connect("localhost","root","","shashto");

if($link === false){
die("ERROR: Could not connect. " . mysqli_connect_error());
}


$title = mysqli_real_escape_string($link, $_POST['title']);
$docname = mysqli_real_escape_string($link, $_REQUEST['docname']);
$content = mysqli_real_escape_string($link, $_REQUEST['content']);

$sql = "INSERT INTO 'visits'('serial','Date','Title', 'DocName', 'Issue') VALUES ('1','1-1-1','$title','$docname', '$content')";

mysqli_close($link);
?>