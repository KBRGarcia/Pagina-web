<?php

$server = "localhost";
$username = "root";
$password = "";
$namedatabase = "kbrgarcia";

$connected = new mysqli($server, $username, $password, $namedatabase);

if ($connected->connect_error) {
    die("Connection failed: " . $connected->connect_error);
}



?>