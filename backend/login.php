<?php

session_start();

require_once "db.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: ../login.html");
    exit();
}

$username = trim($_POST["username"]);
$password = trim($_POST["password"]);

$stmt = $conn->prepare("
    SELECT *
    FROM admin
    WHERE username = :username
    LIMIT 1
");

$stmt->execute([
    ":username" => $username
]);

$admin = $stmt->fetch();

if (
    $admin &&
    password_verify(
        $password,
        $admin["password"]
    )
) {

    $_SESSION["admin"] = $admin["id"];

    header("Location: admin.php");
    exit();
}

echo "Invalid credentials.";