<?php
// Taking all 5 values from the form data(input)
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$address = $_POST['address'];
$index = $_POST['index'];
$city = $_POST['city'];
$phone = $_POST['phone'];
$email = $_POST['email'];

// servername => localhost
// username => root
// password => empty
// database name => db_contact
$conn = mysqli_connect('localhost', 'root', '', 'db_contact');

// Check connection
if($conn === false){
  die("ERROR: Could not connect. "
  . mysqli_connect_error());
}

// database insert SQL code
$sql = mysqli_query($conn, "INSERT INTO `db_contact` VALUES ('0', '$first_name','$last_name','$address','$index','$city','$phone','$email')");

// insert in database
if(mysqli_query($conn, $sql)){
  echo "<h3>data stored in a database successfully."
    . " Please browse your localhost php my admin"
    . " to view the updated data</h3>";
  } else{
    echo "ERROR: Hush! Sorry $sql. "
      . mysqli_error($conn);
  }
// Close connection
mysqli_close($conn);
?>
