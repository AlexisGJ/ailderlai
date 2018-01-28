<?php

$text = htmlspecialchars($_POST["text"]);
file_put_contents("personality.txt",$text);

?>