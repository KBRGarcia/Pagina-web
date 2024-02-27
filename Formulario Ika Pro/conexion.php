<?php

$server = "localhost";
$username = "root";
$password = "";
$namedatabase = "the_ghost";

$connected = new mysqli($server, $username, $password, $namedatabase);

if ($connected->connect_error) {
    die("Connection failed: " . $connected->connect_error);
}



?>