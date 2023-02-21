<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $sName = $_POST['sName'];
    $OName = $_POST['OName'];
    $UName = $_POST['UName'];

    $password = $_POST['password'];
    $email = $_POST['email'];




    $con = new mysqli('localhost', 'root', '', 'login_db');
    if ($con) {
        //echo "connection successful";
        $sql = "insert into `signin_clone`(sName,OName,UName,password, email, )values('$sName','$OName','$UName',$password','$email',')";
        $result = mysqli_query($con, $sql);
        if ($result) {
            echo "Data inserted succesfully";
        } else {
            die(mysqli_error($con));
        }
    } else {
        die(mysqli_error($con));
    }
}
