<?php

session_start();

if (!isset($_SESSION["admin"])) {
    header("Location: ../login.html");
    exit();
}

require_once "db.php";

$stmt = $conn->query("
    SELECT *
    FROM contacts
    ORDER BY created_at DESC
");

$messages = $stmt->fetchAll();

?>

<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Admin Dashboard</title>

<link rel="stylesheet" href="../assets/css/style.css">

</head>
<body>

<header class="nav">

    <div class="logo">
        ZKRCompany Admin
    </div>

    <nav>
        <a href="../index.html">
            Website
        </a>
    </nav>

</header>

<section
    class="services"
    style="padding-top:140px;"
>

    <h2>
        Contact Messages
    </h2>

    <div class="cards">

        <?php if(count($messages) > 0): ?>

            <?php foreach($messages as $message): ?>

                <div class="card">

                    <h3>
                        <?= htmlspecialchars($message["name"]) ?>
                    </h3>

                    <p>
                        <strong>Email:</strong>
                        <?= htmlspecialchars($message["email"]) ?>
                    </p>

                    <p>
                        <strong>Subject:</strong>
                        <?= htmlspecialchars($message["subject"]) ?>
                    </p>

                    <p>
                        <?= nl2br(htmlspecialchars($message["message"])) ?>
                    </p>

                    <p>
                        <small>
                            <?= $message["created_at"] ?>
                        </small>
                    </p>

                    <br>

                    <a
                        class="btn"
                        href="delete.php?id=<?= $message["id"] ?>"
                        onclick="return confirm('Delete this message?')"
                    >
                        Delete
                    </a>

                </div>

            <?php endforeach; ?>

        <?php else: ?>

            <div class="card">

                <p>
                    No messages found.
                </p>

            </div>

        <?php endif; ?>

    </div>

</section>

</body>
</html>