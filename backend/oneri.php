<?php
session_start();
include_once("connection.php");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");



class Oneri {
    private $db;
function __construct($db){
    $this->db=$db;
}

    
function oneri($msg,$user,$pass) {
    $data=$this->db->prepare("SELECT * FROM users WHERE username='$user' AND password='$pass'");
    $data->execute();
    $result=$data->fetch(PDO::FETCH_ASSOC);
    if($result["username"]!=""){

$data=$this->db->prepare("INSERT INTO oneri (username,mesaj,msgDate) VALUES (?,?,?)");
$data->bindParam(1,$user,PDO::PARAM_STR);
$data->bindParam(2,$msg,PDO::PARAM_STR);
$date=date("Y-m-d");
$data->bindParam(3,$date,PDO::PARAM_STR);
$data->execute();
echo  $msg;
require_once("phpMailer.php");
}
}
}



$oneri=new Oneri($dbh);
$getMsgFromJs = json_decode(file_get_contents('php://input'), true);

if($_GET["oneri"]==1){
    $oneri->oneri($getMsgFromJs["msg"],$getMsgFromJs["user"],$getMsgFromJs["pass"]);
 ;}

?>