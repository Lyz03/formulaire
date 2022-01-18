<?php
$title = "Login";
require __DIR__ . '/partials/header.php'; ?>

    <div id="login">
        <h1>Connectez vous</h1>
        <form action="/forms/login-form.php" method="post">
            <div>
                <label for="id-username">Username</label>
                <input type="text" name="username" id="id-username" required>
            </div>
            <div>
                <label for="id-password">Password</label>
                <input type="password" name="password" id="id-password" required>
            </div>
            <div>
                <input type="submit" value="Envoyer" name="submit-login">
            </div>
        </form>
    </div>

    <div id="register">
        <form action="/forms/register-form.php" method="post">
            <div>
                <label for="id-username">Username</label>
                <input type="text" name="username" id="id-username" required>
            </div>
            <div>
                <label for="id-mail">E-mail</label>
                <input type="email" name="email" id="id-mail" required>
            </div>
            <div>
                <label for="id-age">Age</label>
                <input type="number" name="age" id="id-age" required>
            </div>
            <div>
                <label for="id-password">Password</label>
                <input type="password" name="password" id="id-password" min="6" max="15" required>
            </div>
            <div>
                <label for="id-password-repeat">Répétez le mot de passe</label>
                <input type="password" name="password-repeat" id="id-password-repeat" min="6" max="15">
            </div>
            <div>
                <input type="submit" value="Envoyer" name="submit-register" id="submit-register">
            </div>
        </form>
    </div>

    <div>
        <span id="create_account">Pas de compte? Créez en un <strong>gratuitement</strong> !</span>
    </div>

<?php
require __DIR__ . '/partials/footer.php';