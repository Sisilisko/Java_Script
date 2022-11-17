<?php
$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];
$address = $_POST["address"];
$index = $_POST["index"];
$city = $_POST["city"];
$phone = $_POST["phone"];
$email = $_POST["email"];

$palvelin = "localhost";
$kayttajatunnus = "root";
$salasana = "";
$tietokanta = "osoitetieto";

$yhteys = mysqli_connect($palvelin,$kayttajatunnus,$salasana,$tietokanta);
if (mysqli_connect_errno())
{
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$vastaus = mysqli_query($yhteys, "INSERT INTO osoitteet VALUES ('$firstName', '$lastName', '$address', '$index', '$city', '$phone', '$email')");
?>
