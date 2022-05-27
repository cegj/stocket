<?php

require($_SERVER['DOCUMENT_ROOT']) . '/app/database/db.php';

$sqlI = "INSERT INTO monitor (cod) VALUES ('PETR4')";

$db->exec($sqlI);
