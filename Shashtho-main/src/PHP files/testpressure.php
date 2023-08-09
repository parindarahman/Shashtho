<?php

$connect=mysqli_connect("localhost","root","","shashto");
$sql="SELECT * FROM blood_pressure ORDER BY Date4";
$result=mysqli_query($connect,$sql);
$json_array=array();
while($row=mysqli_fetch_assoc($result))
{
	$json_array[]=$row;

}
echo json_encode($json_array);
?>
