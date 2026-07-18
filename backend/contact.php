<?php

require_once __DIR__ . "/db.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: ../contact.html");
    exit();
}

$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$subject = trim($_POST["subject"] ?? "");
$message = trim($_POST["message"] ?? "");

if (
    empty($name) ||
    empty($email) ||
    empty($subject) ||
    empty($message)
) {
    die("All fields are required.");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email address.");
}

$stmt = $conn->prepare("
    INSERT INTO contacts
    (
        name,
        email,
        subject,
        message
    )
    VALUES
    (
        :name,
        :email,
        :subject,
        :message
    )
");

$stmt->execute([
    ":name" => $name,
    ":email" => $email,
    ":subject" => $subject,
    ":message" => $message
]);

header("Location: ../success.html");
exit();