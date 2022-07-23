<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    <link rel="stylesheet" href="css/lrstyle.css">
    <title>Register</title>
</head>

<body background="images/logo62.jpg">

    <div class="wrapper">
        <h1> REGISTER</h1>
        <form action="" method="post" class="form">
            <div class="fullname">
			    <i class="bi bi-people"></i>
                <label><b>Full Name :-</b> </label><br>
                <input type="name" name="name" class="name" placeholder="Enter Your Full Name " required>
            </div>
			

            <div class="email">
			    <i class="bi bi-envelope"></i>
                <label><b>Email :-</b> </label><br>
                <input type="email " name="email" class="email1" placeholder="Enter Your Email " required>
            </div>

            <div class="password">
                <i class="bi bi-key"></i>
                <label><b>Password :-</b></label><br>
                <input type="password" name="password" class="password1" placeholder="Enter Your Password " required>
            </div>

            <div class="cpassword">
                <i class="bi bi-key"></i>
                <label><b>Confirm Password :-</b></label><br>
                <input type="cpassword" name="cpassword" class="cp" placeholder="Enter Your  Password Again " required>
            </div>

            <div class="loginlimit">
				<i class="bi bi-list-ol"></i>
                <label><b>Login Limit</b></label><br>
                <select id="limit" name="limits" class="limit" required>
                    <option value="" disabled selected>Select Limit</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <button class="btn" name="submit">
			<i class="bi bi-box-arrow-in-right"></i>Register </button>
            <p>You have already an account ! </p>

            <a href="login.php">Login</a><br>
            <a href="index.html">Home</a>
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

    if (isset($_POST["submit"])) {
        include 'config.php';

        $name = mysqli_real_escape_string($conn, $_POST["name"]);
        $email = mysqli_real_escape_string($conn, $_POST["email"]);
        $password = mysqli_real_escape_string($conn, ($_POST["password"]));
        $cpassword = mysqli_real_escape_string($conn, ($_POST["cpassword"]));
        $limits = mysqli_real_escape_string($conn, $_POST["limits"]);
        $limit_used = 0;

        if (mysqli_num_rows(mysqli_query($conn, "SELECT * FROM users WHERE email='{$email}'")) > 0) {
            echo "<script>alert('{$email} - This email has already taken.');</script>";
        }else {
            if ($password === $cpassword) {
                $sql = "INSERT INTO users (name, email, password, login_limits, limit_used) VALUES ('{$name}', '{$email}', '{$password}', '{$limits}', '{$limit_used}')";
                $result = mysqli_query($conn, $sql);

                if ($result) {
                    header("Location: login.php");
                }else {
                    echo "<script>Error: ".$sql.mysqli_error($conn)."</script>";
                }
            }else {
                echo "<script>alert('Password and confirm password do not match.');</script>";
            }
        }
    }
?>
