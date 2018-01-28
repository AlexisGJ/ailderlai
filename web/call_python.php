<?php

$text = htmlspecialchars($_POST["value"]);

$python = `python send_sms.py "` . $text . `"`;
echo $python;

?>