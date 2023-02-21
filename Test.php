<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Forms</title>

    <link rel="stylesheet" href="style.css">
    <style>
        * h1 {
            text-align: center;
        }

        .container {
            width: 70%;
            margin: 0 auto;
        }

        ::placeholder {
            text-align: center;
        }

        .genderContainer {
            text-align: center;
            font-size: 18px;
        }

        input {
            width: 100%;
            padding: 15px;
            margin: 8px;
        }


        .gender1 {
            width: 10%;
        }

        label {
            font-weight: bold;
            padding: 10px;
            font-size: 22px;
        }

        .btn {
            text-align: center;
            margin: 10px;

        }

        body {
            background-image: url("./Background.jpg");
            background-color: grey;

        }

        button {
            padding: 10px;
            width: 20%;
            background-color: blue;
            border-radius: 10px;
            font-size: 18px;
        }
    </style>
</head>

<body>
    <h1 style="text-align: center;">Enter your details as below</h1>
    <div class="container" style="  width:70%;">
        <form action="connect.php" method="post">

            <div><label for="name">Name</label>
                <input type="text" name="name" placeholder="Enter your name">
            </div>
            <div><label for="email">Email</label>
                <input type="email" name="email" placeholder="Enter your email">
            </div>

            <div><label for="mobile">Mobile</label>
                <input type="text" name="mobile" placeholder="Enter your mobile">

            </div>
            <div><label for="password">Password</label>
                <input type="password" name="password" placeholder="Enter your password">
            </div>
            <div class="btn">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>

</body>

</html>