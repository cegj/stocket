<?php

$db = new PDO("sqlite:{$_SERVER['DOCUMENT_ROOT']}/app/database/database.db") or die ("Erro ao abrir a base");