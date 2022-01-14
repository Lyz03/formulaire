<?php

require __DIR__ . '/../helpers/forms-utils.php';

if(isset($_POST['submit-login'])) {
    // Getting secured form data.
    $username = getSecuredStringPostData('username');
    $password = getSecuredStringPostData('password') ?>

    <table>
        <tr>
            <td>Username</td>
            <td>Password</td>
        </tr>
        <tr>
            <td><?= $username ?></td>
            <td><?= $password ?></td>
        </tr>
    </table>

    <a href="/login.php" style="
        background: #c9c9c9;
        border-radius: 8px;
        padding: 5px;
        color: #f6f6f6;
        font-weight: bold;
        margin-top: 1rem;
    ">
        Vers le formulaire de connection
    </a>
    <?php
}
else {
    header('Location: /login.php');
}