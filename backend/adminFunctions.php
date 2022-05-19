<?php
include("connection.php");
header('Access-Control-Allow-Origin: *');

header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
session_start();

class Admin {
    private $db;
    private $auth;
    private $commandList=array();
    function __construct($db,$authName,$authPass){
        $this->db=$db;
        $data=$db->prepare("SELECT * FROM users WHERE username='$authName' AND password='$authPass'");
        $data->execute();
        $result=$data->fetch(PDO::FETCH_ASSOC);
        if($result["auth"]=="admin"){
            $this->auth=true;
        }

    }

    function addUser($user,$pass,$birth,$startJob,$holiday,$image){
        if($this->auth==true){
        $data=$this->db->prepare("INSERT INTO users (username,password,birthday,startJob,holiday,auth) VALUES (?,?,?,?,?,?)");
        $data->bindParam(1,$user,PDO::PARAM_STR);
        $data->bindParam(2,$pass,PDO::PARAM_STR);
        $data->bindParam(3,$birth,PDO::PARAM_STR);
        $data->bindParam(4,$startJob,PDO::PARAM_STR);
        $data->bindParam(5,$holiday,PDO::PARAM_STR);
        $data->bindValue(6,"user",PDO::PARAM_STR);
        $data->execute(); 
      



        echo "eklendi";
        }else{
             echo "yönetici değilsiniz";
        }
    }


    function allUsers(){
       if($this->auth==true){
            $data=$this->db->prepare("SELECT username from users");
            $data->execute();
            $userDataList=array();
            while($result=$data->fetch(PDO::FETCH_ASSOC)){
                $userDataList[]=$result["username"];
            }
            $this->commandList["userlist"]=json_encode($userDataList);
            // echo json_encode($userDataList);
        
         }
    }

    function insertPerformance($user,$date,$performance){
         if($this->auth==true){
            $data=$this->db->prepare("INSERT into performans (username,Performans,Tarih) VALUES (?,?,?)");
            $data->bindParam(1,$user,pdo::PARAM_STR);
            $data->bindParam(2,$performance,pdo::PARAM_INT);
            $data->bindParam(3,$date,pdo::PARAM_STR);
            $data->execute();
            echo "eklendi";
         }
    }

    function oneriOku($start,$finish){
  
      if($this->auth==true){
            $data=$this->db->prepare("SELECT * FROM oneri WHERE msgDate BETWEEN '$start' AND '$finish'");
            $data->execute();
            $userDataList=array();
            while($result=$data->fetch(PDO::FETCH_ASSOC)){
                $userDataList[]=$result;
            }
            $this->commandList["msgList"]=json_encode($userDataList);
         
            // echo json_encode($userDataList);
          }

    }

function __destruct()
{
    $helperArray=array();
    foreach($this->commandList as $var){
  $helperArray[]=$var."~";
    }
    echo(substr(implode($helperArray),0,-1));
}

}



$getFromJs = json_decode(file_get_contents('php://input'), true);
$Admin=new Admin($dbh,$getFromJs["authUser"],$getFromJs["authPass"]);
$Admin->allUsers();
@$addUser=$_GET["type"];
 if ($addUser=="addUser"){
   $Admin->addUser($getFromJs["userName"],$getFromJs["password"],$getFromJs["birthday"],$getFromJs["startJob"],$getFromJs["holiday"],$getFromJs["image"]);
 }else if($addUser=="addPerformance"){
     $Admin->insertPerformance($getFromJs["username"],$getFromJs["performance"],$getFromJs["date"]);
 }else if($addUser=="oneri"){
   
     $Admin->oneriOku($getFromJs["dateStart"],$getFromJs["dateFinish"]);
 }

