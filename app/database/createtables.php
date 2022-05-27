<?php

require_once($_SERVER['DOCUMENT_ROOT']) . '/app/database/db.php';

$sqlCreate = "CREATE TABLE buy (id INTEGER PRIMARY KEY, cod TEXT, units INTEGER, price FLOAT)";
$db->exec($sqlCreate);
$sqlCreate = "CREATE TABLE sell (id INTEGER PRIMARY KEY, cod TEXT, units INTEGER, price FLOAT)";
$db->exec($sqlCreate);
$sqlCreate = "CREATE TABLE portfolio (id INTEGER PRIMARY KEY, cod TEXT, units INTEGER)";
$db->exec($sqlCreate);
$sqlCreate = "CREATE TABLE monitor (id INTEGER PRIMARY KEY, cod TEXT)";
$db->exec($sqlCreate);
