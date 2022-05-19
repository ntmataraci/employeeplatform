import React,{useRef,useState} from "react"
const Login = (props) => {
const [isLogged,setIsLogged]=useState(false)
const [auth,setAuth]=useState()
const [msg,setMsg]=useState()
const username=useRef()
const password=useRef()

const submitHandler = (e) => {
e.preventDefault()
const user=username.current.value
const pass=password.current.value
loginFetcher(user,pass)
}


const formData = new FormData();

const loginFetcher = async (user,pass)=>{
formData["user"]=user
formData["pass"]=pass
const data= await fetch(props.myurl+"/backend/login.php?login=1",{
    method:"POST",
    body:JSON.stringify(formData)
})

const result =await data.text()
const ArrResult=result.split(",")
props.getInformation(ArrResult)
if(ArrResult[2]==="user"){
    setIsLogged(true)
    setAuth("user")
    props.authSit("user")
}else if(ArrResult[2]==="admin"){
    setAuth("admin")
    props.authSit("admin")
}
else{setIsLogged(false)
setMsg("Hatalı Giriş")
}
}

const logoutFetcher = async()=>{
    const data= await fetch(props.myurl+"/backend/login.php?login=2")
    const result=await data.text()
    result==="destroyed"?setIsLogged(false):setIsLogged(true)
    setMsg("Çıkış Yapıldı")
}



    return(
<>

<div style={{height:"70vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
    <div>
    <h2 style={{color:"wheat"}}>Personel Platformu</h2>

{!isLogged&&
<>
<div style={{color:"red"}}>{msg}</div>
<form style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
    <input type="text" placeholder="Kullanıcı Adı Giriniz" ref={username} style={{borderRadius:"1rem",margin:"0.5rem",height:"2rem",paddingLeft:"0.5rem"}} className="focusedInput"></input>
    <input type="password" placeholder="Şifrenizi Giriniz" ref={password} style={{borderRadius:"1rem",margin:"0.5rem",height:"2rem",paddingLeft:"0.5rem"}} className="focusedInput"></input>
    <button onClick={submitHandler} style={{borderRadius:"5rem",width:"150px",backgroundColor:"orange",color:"white",fontWeight:"bolder",fontSize:"1.2rem",padding:"0.5rem"}}>Giriş Yap</button>
</form>
</>
}
{isLogged&&
<button onClick={logoutFetcher}>Çıkış</button>
}
</div>
</div>
</>

    )
}

export default Login
