import React,{useEffect, useRef, useState} from "react"
const KullaniciBilgileri = (props) =>{
const [users,setUsers]=useState()

const userName=useRef()
const password=useRef()
const birthday=useRef()
const startJob=useRef()
const holiday=useRef()
// const image=useRef()
const formData=new FormData()


useEffect(()=>{
userName.current.value=""
password.current.value=""

},[userName])




const addingUser = async() => {
formData["userName"]=userName.current.value
formData["password"]=password.current.value
formData["birthday"]=birthday.current.value
formData["startJob"]=startJob.current.value
formData["holiday"]=holiday.current.value
// formData["image"]=image.current.value.substr(12)
formData["authUser"]=props.sendInformation()[0]
formData["authPass"]=props.sendInformation()[1]
console.log(formData)
const data=await fetch(props.myurl+"/backend/adminFunctions.php?type=addUser",{
method:"POST",
body:JSON.stringify(formData)
})
const result=await data.text()
userName.current.value=""
password.current.value=""
birthday.current.value=""
startJob.current.value=""
holiday.current.value=""
// image.current.value=""
allUsers()
}


const allUsers= async()=>{
formData["authUser"]=props.sendInformation()[0]
formData["authPass"]=props.sendInformation()[1]
    const data=await fetch(props.myurl+"/backend/adminFunctions.php",{
        method:"POST",
        body:JSON.stringify(formData)
        })
    const result=await data.json()
    setUsers(result)
}

useEffect(()=>{
allUsers()

},[])


    return(
        <>
        <div style={{display:"flex",flexDirection:"column",color:"white"}}>
        <div style={{display:"flex",flexDirection:"column"}}>
            <h2>Kullanıcı Ekle</h2>
<form onSubmit={(e)=>e.preventDefault()} style={{display:"flex",flexDirection:"column"}}>
         Kullanıcı Adı:    <input type="text" ref={userName} required placeholder="Kullanıcı Giriniz" autocomplete="off"></input>
         Şifre:    <input type="password" ref={password} required autocomplete="off"></input>
         Doğum Günü:    <input type="date" ref={birthday} required></input>
         İş Başı:    <input type="date" ref={startJob} required></input>
        Kalan Tatil:    <input type="text" ref={holiday}></input>
         <button onClick={addingUser}>ekle</button>
         </form>

        </div>
        <div>
          <h2>  Mevcut Kullanıcılar:</h2>
          <ul>
{users&&
users.map((item,idx)=><li key={idx}>{item}</li>)}
</ul>
        </div>
        </div>
        </>
    )
}

export default KullaniciBilgileri