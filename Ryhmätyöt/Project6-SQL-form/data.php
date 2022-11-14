<?php

$etu = $_POST["etunimi"];
$suku = $_POST["sukunimi"];
$os = $_POST["losoite"];
$pnro = $_POST["pnro"];
$ptp = $_POST["ptp"];
$maa = $_POST["maa"];

$palvelin = "localhost";
$kayttajatunnus = "root";
$salasana = "";
$tietokanta = "osoitetieto";

$yhteys = mysqli_connect($palvelin,$kayttajatunnus,$salasana,$tietokanta);
if (mysqli_connect_errno())
{
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$vastaus = mysqli_query($yhteys, "INSERT INTO osoitteet VALUES ('$etu', '$suku', '$os', '$pnro', '$ptp', '$maa')");



 ?>
