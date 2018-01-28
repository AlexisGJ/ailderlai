<?php

$text = htmlspecialchars($_POST["text"]);
chmod("personality.txt", 0777);
file_put_contents("personality.txt",$text);

echo $text;

?>