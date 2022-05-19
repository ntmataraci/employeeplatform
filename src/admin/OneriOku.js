import React, { useEffect, useRef, useState } from "react"
const OneriOku =(props)=> {
const startDate=useRef()
const finishDate=useRef()

const [filterSit,setFilterSit]=useState(false)
const formData = new FormData();

const oneriOku = async()=>{
    formData["dateStart"]=startDate.current.value
    formData["dateFinish"]=finishDate.current.value
    formData["authUser"]=props.sendInformation()[0]
formData["authPass"]=props.sendInformation()[1]
    const data=await fetch(props.myurl+"/backend/adminFunctions.php?type=oneri", {
        method:"POST",
        body:JSON.stringify(formData)
    })
    const result = await data.text()
    const jsonerResult=await JSON.parse(result.split("~")[1])
        console.log(jsonerResult)
        setFilterSit(jsonerResult)
    
}

useEffect(()=>{oneriOku()},[])



    return(
        <>
<div style={{color:"white",display:"flex",gap:"1rem",flexDirection:"column",wordBreak:"break-word",marginBottom:"1rem"}}>
Tarih Aralığı : <div style={{display:"flex",flexDirection:"row"}}><input type="date" ref={startDate}></input> - <input type="date" ref={finishDate}></input> </div>
<button style={{maxWidth:"350px"}} onClick={oneriOku}>Filtrele</button></div>
{
    filterSit&&
    filterSit.map(item=>
    <div style={{backgroundColor:"silver",borderBottom:"1px solid white",padding:"0.2rem",margin:"0.1rem",display:"flex",justifyContent:"space-between"}} key={item.id}><i>{item.mesaj}</i><div> <b>{item.username}</b> <b>{item.msgDate}</b></div></div>)
}

        </>
    )
}

export default OneriOku