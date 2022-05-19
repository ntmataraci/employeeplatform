<?php
session_start();
include_once("connection.php");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");


class userPerformance {
    private $db;
function __construct($db){
    $this->db=$db;
}

function readUserData ($username){
    $data=$this->db->prepare("SELECT * from performans WHERE username='$username' ORDER BY Tarih");
    $data->execute();
    $userDataList=array();
while($result=$data->fetch(PDO::FETCH_ASSOC)){
$userDataList[]=$result;
}
echo ( json_encode( $userDataList));
}

}

$userPerformance=new userPerformance($dbh);
$getMsgFromJs = json_decode(file_get_contents('php://input'), true);

$userPerformance->readUserData($getMsgFromJs["user"]);