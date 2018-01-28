<?php

$text = htmlspecialchars($_POST["text"]);
file_get_contents("output.txt", $text);
echo $text;

?>