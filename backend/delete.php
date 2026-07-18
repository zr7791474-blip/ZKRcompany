<?php

session_start();

if (!isset($_SESSION["admin"])) {
    header("Location: ../login.html");
    exit();
}

require_once "db.php";

$id = filter_input(
    INPUT_GET,
    "id",
    FILTER_VALIDATE_INT
);

if (!$id) {
    header("Location: admin.php");
    exit();
}

$stmt = $conn->prepare("
    DELETE FROM contacts
    WHERE id = :id
");

$stmt->execute([
    ":id" => $id
]);

header("Location: admin.php");
exit();