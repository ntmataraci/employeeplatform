<?php
include("connection.php");
header('Access-Control-Allow-Origin: *');

header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
        session_start();
global $userHelperName;
class userLogin {
private $db;
function __construct($db){
    $this->db=$db;
}

function login($user,$pass){
    $data=$this->db->prepare("SELECT * FROM users WHERE username='$user' AND password='$pass'");
    $data->execute();
    $result=$data->fetch(PDO::FETCH_ASSOC);
    if($result["username"]!=""){
        $_SESSION["username"]=$user;
        $_SESSION["password"]=$pass;
        // önemli silme
        if($result["auth"]=="admin"){
            $_SESSION["auth"]="admin";
            echo "$user,$pass,admin";
        }else{
            $_SESSION["auth"]="user";
            echo "$user,$pass,user";
        }
    }
        else{
            echo "hatalı giriş";
            }
}
}




$getFromJs = json_decode(file_get_contents('php://input'), true);
$userLogin=new userLogin($dbh);
if($_GET["login"]==1){
    $userLogin->login($getFromJs["user"],$getFromJs["pass"]);
 ;}
 elseif($_GET["login"]==2){
    session_destroy();
    echo "destroyed";
 }




?>