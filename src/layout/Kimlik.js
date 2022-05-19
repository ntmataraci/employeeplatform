import Bilgiler from "./Bilgiler";
import React, { useEffect,useState } from 'react'
const Kimlik = (props) => {
  const [userData,setUserData]=useState()
  const [avgPer,setAvgPer]=useState()
const formData=new FormData()
const userInformation = async ()=>{
  formData["user"]=props.getInformation[0]
  formData["pass"]=props.getInformation[1]
  const data = await fetch(props.myurl+"/backend/userFunctions.php",{
    method:"POST",
    body:JSON.stringify(
      formData
    )
  }
  )

  const result=await data.json()
  console.log(result)
  setUserData(result)
}

useEffect(()=>
{
  props.getInformation[0]&&
userInformation()
},[])

const avgPerformance=()=>{
  
  if(props.sendPerformances){
  const totalPerform=props.sendPerformances.reduce((prev,curr)=>{return +prev+(+curr.Performans)},0)
const avgPerform=Math.floor(totalPerform/props.sendPerformances.length)
console.log(props.sendPerformances)
setAvgPer(avgPerform)
}
}
useEffect(()=>{
avgPerformance()}
,[props.sendPerformances])


  return (
    <>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          border: "1px solid #39a9f9",
          borderBottomLeftRadius: "2rem",
          borderTopLeftRadius: "2rem",
          height: "100px",
          color: "#acb2b9",
          maxWidth:"500px"
        }}
      >
        <div>
          <img
            src="./img/userImg.png"
            style={{
              width: "100px",
              borderBottomLeftRadius: "2rem",
              borderTopLeftRadius: "2rem",
            }}
          ></img>
        </div>
        {userData&&
        <div style={{ display: "flex", flexDirection: "column",justifyContent:"center",marginLeft:"1rem" }}>
            Merhaba {props.getInformation[0]} ! Umarım iyisindir.
          <div>
         
            <div><b>İşe Giriş Tarihi :</b> {userData.startJob}</div>
  
          </div>

          <div>
            <div><b>Kalan Yıllık İzin :</b> {userData.holiday}</div>
    
          </div>

          <div>
            <div><b>Ortalama Performans :</b> {avgPer&&avgPer}</div>
          </div>
        </div>
}
      </div>
      <Bilgiler sendPerformances={props.sendPerformances} sendOneriQty={props.sendOneriQty}/>
    </>
  );
};

export default Kimlik;
