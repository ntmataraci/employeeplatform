import React, { useEffect, useRef, useState } from "react"
const PerformansEkle = (props)=>{
    const [users,setUsers]=useState()
    const [filteredVal,setFilteredVal]=useState()
const formData=new FormData()
const username=useRef()
const date=useRef()
const performance=useRef()


const performanceAdding=async() =>{
formData["username"]=username.current.value
formData["performance"]=date.current.value
formData["date"]=performance.current.value
formData["authUser"]=props.sendInformation()[0]
formData["authPass"]=props.sendInformation()[1]
const data=await fetch(props.myurl+"/backend/adminFunctions.php?type=addPerformance",{
method:"POST",
body:JSON.stringify(formData)
})
const result=await data.text()
console.log(result)
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

useEffect(()=>{allUsers()},[])

const userSelect=(e)=>{
    const filterHandler=users.filter(item=>item.indexOf(e.target.value)>-1)
    setFilteredVal(filterHandler)
  }

const selectedUser=(item)=>{

    username.current.value=item.target.innerText
    setFilteredVal()
}

    return(
        <>
        <div style={{color:"white"}}>
            <h2>Toplu Ekleme</h2>
            <input type="file"></input>
            <button>Ekle</button>
        </div>
        <div style={{color:"white"}}> <h3>Özel Seçim</h3>
        <input type="text" ref={username} onChange={userSelect}></input>
{filteredVal&&
filteredVal.map(item=><li onClick={(item)=>selectedUser(item)} style={{borderBottom:"1px solid white"}}>{item}</li>)}
        <input type="date" ref={date}></input>
        <input type="number" ref={performance} ></input>
        <button onClick={performanceAdding}>Değiştir/Ekle</button>
        </div>
        </>
    )
}

export default PerformansEkle