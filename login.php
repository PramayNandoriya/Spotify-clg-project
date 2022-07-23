<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    <link rel="stylesheet" href="css/login.css">
    <title> Login </title>
</head>

<body background="images/logo62.jpg"> 
    <div class="wrapper">
        <h1> LOGIN</h1>
        <form action="" method="post" class="form">
            <div class="email">
                <i class="bi bi-envelope"></i>
                <label></label><b>Email :-</b> </label><br>
                <input type="email " class="email1" name="email" placeholder="Enter Your Email " required>
            </div>
            <div class="password">
                <i class="bi bi-key"></i>
                <label><b>Password :-</b></label><br>
                <input type="password" class="password1" name="password" placeholder="Enter Your Password" required>
            </div>

            <button class="btn" name="login">
			<i class="bi bi-box-arrow-in-right"></i>Log In</button>
            <p>Create Account Click Here ! </p>

            <a href="reg.php"><b>Register</b></a><br>
            <a href="index.html"><b>Home</b></a>
            </b>
        </form>
    </div>


</body>

</html>

<?php
    session_start();
    if (isset($_SESSION["SESSION_EMAIL"])) {
        header("Location: welcome.php");
    }

    if (isset($_POST["login"])) {
        include 'config.php';
        
        $email = mysqli_real_escape_string($conn, $_POST["email"]);
        $password = mysqli_real_escape_string($conn, ($_POST["password"]));

        $sql = "SELECT * FROM users WHERE email='{$email}' AND password='{$password}'";
        $result = mysqli_query($conn, $sql);
        $count = mysqli_num_rows($result);

        if ($count === 1) {
            $row = mysqli_fetch_assoc($result);

            if ($row['login_limits'] === $row['limit_used'] || $row['login_limits'] < $row['limit_used']) {
                echo "<script>alert('Your login limits are not enough.');</script>";
            }else {
                $x = $row["limit_used"] + 1;
                mysqli_query($conn, "UPDATE users SET limit_used='{$x}' WHERE email='{$email}'");

                $_SESSION["SESSION_EMAIL"] = $email;
                header("Location: welcome.php");
            }
        }else {
            echo "<script>alert('Your Login details is incorrect.');</script>";
        }
    }
?>
