<?php
session_start();
include_once("connection.php");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");



class Anket {
    private $db;
function __construct($db){
    $this->db=$db;
}

    
function anket($user,$pass,$bir,$iki,$uc,$dort,$bes,$alti,$yedi,$sekiz,$dokuz,$on,$bolum,$cinsiyet,$egitim,$sure) {
    $data=$this->db->prepare("SELECT * FROM users WHERE username='$user' AND password='$pass'");
    $data->execute();
    $result=$data->fetch(PDO::FETCH_ASSOC);
    if($result["username"]!=""){
$beforeInserted=$this->db->prepare("SELECT username from memnuniyetanketi WHERE username='$user'");
$beforeInserted->execute();
$beforeInsertedResult=$beforeInserted->fetch(PDO::FETCH_ASSOC);
if($beforeInsertedResult["username"]==""){
$data=$this->db->prepare("INSERT INTO memnuniyetanketi (username,bir,iki,uc,dort,bes,alti,yedi,sekiz,dokuz,onData,bolum,cinsiyet,egitim,sure) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
$data->bindParam(1,$user,PDO::PARAM_STR);
$data->bindParam(2,$bir,PDO::PARAM_STR);
$data->bindParam(3,$iki,PDO::PARAM_STR);
$data->bindParam(4,$uc,PDO::PARAM_STR);
$data->bindParam(5,$dort,PDO::PARAM_STR);
$data->bindParam(6,$bes,PDO::PARAM_STR);
$data->bindParam(7,$alti,PDO::PARAM_STR);
$data->bindParam(8,$yedi,PDO::PARAM_STR);
$data->bindParam(9,$sekiz,PDO::PARAM_STR);
$data->bindParam(10,$dokuz,PDO::PARAM_STR);
$data->bindParam(11,$on,PDO::PARAM_STR);
$data->bindParam(12,$bolum,PDO::PARAM_STR);
$data->bindParam(13,$cinsiyet,PDO::PARAM_STR);
$data->bindParam(14,$egitim,PDO::PARAM_STR);
$data->bindParam(15,$sure,PDO::PARAM_STR);
$data->execute();
echo "güncel";
}else{
    $data=$this->db->prepare("UPDATE memnuniyetanketi SET bir='$bir',iki='$iki',uc='$uc',dort='$dort',bes='$bes',alti='$alti',yedi='$yedi',sekiz='$sekiz',dokuz='$dokuz',onData='$on',bolum='$bolum',cinsiyet='$cinsiyet',egitim='$egitim',sure='$sure' WHERE username='$user'");
    $data->execute();
}
    }
}

function anketOku (){
    $data=$this->db->prepare("SELECT * from memnuniyetanketi");
    $data->execute();
    $userDataList=array();
    while($result=$data->fetch(PDO::FETCH_ASSOC)){
        $userDataList[]=$result;
    }
echo json_encode(($userDataList));
}

}



$anket=new Anket($dbh);
$getMsgFromJs = json_decode(file_get_contents('php://input'), true);

if($_GET["anket"]==1){
    $anket->anket($getMsgFromJs["user"],$getMsgFromJs["pass"],$getMsgFromJs["1"],$getMsgFromJs["2"],$getMsgFromJs["3"],$getMsgFromJs["4"],$getMsgFromJs["5"],$getMsgFromJs["6"],$getMsgFromJs["7"],$getMsgFromJs["8"],$getMsgFromJs["9"],$getMsgFromJs["10"],$getMsgFromJs["bolum"],$getMsgFromJs["cinsiyet"],$getMsgFromJs["egitim"],$getMsgFromJs["sure"]);
 ;}
 if($_GET["anket"]==2){
    $anket->anketOku();
 ;}

?>