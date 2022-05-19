<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
// use your account 
$user="root"; 
$pass="";

try {
    $dbh=new PDO('mysql:host=localhost;dbname=databasename;charset=utf8',$user,$pass);
}
catch(PDOException $e){
    print "Hata : ".$e->getMessage()."<br/>";
    die();

}

// if (!is_writable(session_save_path())) {
//     echo 'Session path "'.session_save_path().'" is not writable for PHP!'; 
// }

?>