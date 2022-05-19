<?php
session_start();
include_once("connection.php");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");


class userOneri {
    private $db;
function __construct($db){
    $this->db=$db;
}

function readOneriData ($username){
    $data=$this->db->prepare("SELECT id from oneri WHERE username='$username'");
    $data->execute();
    $userDataList=array();
while($result=$data->fetch(PDO::FETCH_ASSOC)){
$userDataList[]=$result;
}
echo ( json_encode( $userDataList));
}

}

$userOneri=new userOneri($dbh);
$getMsgFromJs = json_decode(file_get_contents('php://input'), true);

$userOneri->readOneriData($getMsgFromJs["user"]);
?>