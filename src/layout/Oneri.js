import React,{useRef,useState} from "react"
import Anket from "./Anket"
const Oneri = (props)=> {
const [clearMsg,setClearMsg]=useState(false)
const [myVal,setMyVal]=useState()
const [remainChar,setRemainChar]=useState(20)
const [msgSended,setMsgSended]=useState()
    const msg=useRef()

    const formData=new FormData()

    const sendMsg=async (e) => {
        setMsgSended("Gönderiliyor lütfen bekleyiniz...")
        e.preventDefault()
        formData["msg"]=msg.current.value
        console.log(props.userName)
        formData["user"]=props.userName[0]
        formData["pass"]=props.userName[1]
        const data= await fetch(props.myurl+"/backend/oneri.php?oneri=1", {
            method:"POST",
            body:JSON.stringify(formData)
        })
        const result=await data.text()
        console.log(result)
  setMyVal("")
  setRemainChar(20)
  setMsgSended("Gönderildi, Teşekkür ederiz.")
    }
const changeHandler= (x)=>{
    setMyVal(msg.current.value)
    console.log(msg.current.value)
    setRemainChar(20-msg.current.value.length)
   return(x)
}



    return(
        <>
 
        <form style={{color:"white",margin:"auto",dispaly:"flex",flexDirection:"column"}}>
            <label for="oneri">Merhaba, şikayet yada önerinizi alabilirim.</label>
           <textarea ref={msg} id="oneri" onChange={changeHandler} value={myVal}></textarea>
           <div style={{margin:"auto",width:"100%",display:"flex",justifyContent:"center"}}>
               {(myVal&&myVal.length>20)?
            <button onClick={sendMsg} style={{width:"100%",backgroundColor:"orange",borderRadius:"1rem",maxWidth:"300px",marginTop:"0.1rem"}}>Gönder</button>
            :
            <div style={{width:"100%"}} >Min {remainChar} Karakter </div>
               }
            </div>
        </form>
{msgSended&&<p style={{color:"white"}}>{msgSended}</p>}
<Anket userName={props.userName} myurl={props.myurl}/>
        </>
    )
}

export default Oneri