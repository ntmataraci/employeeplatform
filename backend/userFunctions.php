<?php
session_start();
include_once("connection.php");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");


class userFunctions {
    private $db;
function __construct($db){
    $this->db=$db;
}

function readUserData ($username,$password){
    $data=$this->db->prepare("SELECT * from users where username='$username' and password='$password'");
    $data->execute();
$result=$data->fetch(PDO::FETCH_ASSOC);
echo ( json_encode( $result));
}

}

$userFunctions=new userFunctions($dbh);
$getMsgFromJs = json_decode(file_get_contents('php://input'), true);

$userFunctions->readUserData($getMsgFromJs["user"],$getMsgFromJs["pass"]);