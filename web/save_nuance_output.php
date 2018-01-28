<?php

$text = htmlspecialchars($_POST["text"]);
$command = 'python ../watson_perso_insights.py "' . $text . '"';
$python = `$command`;
echo $python;

$command2 = '"' . $python .'" >> output.txt';
$python2 = `$command2`;
echo $python2;



?>