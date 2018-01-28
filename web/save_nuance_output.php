<?php

$text = htmlspecialchars($_POST["text"]);
$command = 'python ../watson_perso_insights.py "' . $text . '"';
$python = `$command`;
echo $python;

echo $text;

?>