<?php
$title = "Contact";
require __DIR__ . '/partials/header.php'; ?>

    <div>
        <h1>Mon formulaire de contact</h1>
        <form action="/forms/contact-form.php" method="post">
            <div>
                <label for="id-username">Username</label>
                <input type="text" name="username" id="id-username" required>
            </div>
            <div>
                <label for="id-message">Votre message</label>
                <textarea name="message" id="id-message" required></textarea>
            </div>
            <div>
                <input type="submit" value="Envoyer" name="submit">
            </div>
        </form>
    </div>

<?php
require __DIR__ . '/partials/footer.php';
