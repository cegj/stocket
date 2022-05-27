<?php

require_once($_SERVER['DOCUMENT_ROOT']) . '/app/database/db.php';

$sqlS = 'SELECT cod FROM monitor';

// $values = $db->prepare($sqlS);
$values = $db->query($sqlS);

$result = [];

while ($row = $values->fetch(PDO::FETCH_ASSOC)){

    array_push($result, $row); 
    
}

echo json_encode($result);