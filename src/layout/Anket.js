import { useEffect, useState,useRef } from "react"
import { SorularAnket } from "./sorular/SorularAnket"

const Anket = (props) => {
const [sorularRender,setSorularRender]=useState()
const [cevaplarObjState,setCevaplarObjState]=useState()
const [cevaplandi,setCevaplandi]=useState(false)
    useEffect(()=>{
        setSorularRender(SorularAnket)
    },[SorularAnket])


    const cinsiyet=useRef()
const cevaplarObj={"1":"3","2":"3","3":"3","4":"3","5":"3","6":"3","7":"3","8":"3","9":"3","10":"3"}
 const changedRadioHandler= (x)=>{
cevaplarObj[x.target.name]=x.target.value
 }   

const formAttach= (x) => {
    return(
        <>
        <div onChange={changedRadioHandler} style={{display:"flex",gap:"0.5rem"}}>
<input type="radio" id={"bir1"+x} value="1" name={x} />
  <label for={"bir1"+x} >1</label>
  <input type="radio" id={"bir2"+x}  value="2" name={x}/>
  <label for={"bir2"+x}>2</label>
  <input type="radio" id={"bir3"+x} value="3" name={x} />
  <label for={"bir3"+x} >3</label>
  <input type="radio" id={"bir4"+x}  value="4" name={x}/>
  <label for={"bir4"+x} >4</label>
  <input type="radio" id={"bir5"+x}  value="5" name={x}/>
  <label for={"bir5"+x} >5</label>
  </div>
  </>
    )
}

const getSubmitHandler= (x) =>{
    x.preventDefault()
    cevaplarObj["cinsiyet"]=x.target.cinsiyet.value
    cevaplarObj["egitim"]=x.target.egitim.value
    cevaplarObj["sure"]=x.target.sure.value
    cevaplarObj["bolum"]=x.target.bolum.value
setCevaplarObjState(cevaplarObj)
anketConnection()
}

useEffect(()=>{
    console.log(cevaplarObjState)
},[cevaplarObj])



const formData=new FormData()

const anketConnection = async () =>{
    console.log(props.myurl)
        formData["user"]=props.userName[0]
        formData["pass"]=props.userName[1]

        formData["1"]=cevaplarObj["1"]
        formData["2"]=cevaplarObj["2"]
        formData["3"]=cevaplarObj["3"]
        formData["4"]=cevaplarObj["4"]
        formData["5"]=cevaplarObj["5"]
        formData["6"]=cevaplarObj["6"]
        formData["7"]=cevaplarObj["7"]
        formData["8"]=cevaplarObj["8"]
        formData["9"]=cevaplarObj["9"]
        formData["10"]=cevaplarObj["10"]
        formData["bolum"]=cevaplarObj["bolum"]
        formData["cinsiyet"]=cevaplarObj["cinsiyet"]
        formData["egitim"]=cevaplarObj["egitim"]
        formData["sure"]=cevaplarObj["sure"]
    const data=await fetch(props.myurl+"/backend/anket.php?anket=1", {
        method:"POST",
        body:JSON.stringify(formData)
    })
    const result = await data.text()
    console.log(result)
    setCevaplandi(true)
}

const askStyle=  {
    display:"flex",justifyContent:"space-between",borderBottom:"0.5px solid gray",paddingBottom:"0.5rem"
}


    return (
<>
<div style={{color:"white",padding:"0.5rem 1rem"}}>
    <form onSubmit={getSubmitHandler} >
<div style={askStyle}>
<label for="cinsiyet">Cinsiyet</label>
<select style={{width:"120px"}} id="cinsiyet" ref={cinsiyet}>
    <option>Bay</option>
    <option>Bayan</option>
</select>
</div>
<br></br>
<div style={askStyle}>
<label for="egitim">Eğitim</label>
<select style={{width:"120px"}} id="egitim">
    <option>İlköğretim</option>
    <option>Lise</option>
    <option>Meslek Lisesi</option>
    <option>Yüksekokul</option>
    <option>Üniversite</option>
</select>
</div>
<br></br>
<div style={askStyle}>
<label for="sure">Firmada Çalışma Süreniz</label>
<select style={{width:"120px"}} id="sure">
    <option>0-1 Yıl</option>
    <option>1-3 Yıl</option>
    <option>3-5 Yıl</option>
    <option>5-10 Yıl</option>
    <option>10 Yıl üstü</option>
</select>
</div>
<br></br>
<div style={askStyle}>
<label for="bolum">Bölümünüz</label>
<select style={{width:"120px"}} id="bolum">
    <option>Büro</option>
    <option>Talaşlı</option>
    <option>Dövme</option>
    <option>Diğer</option>
</select>
</div>

{sorularRender&&sorularRender.map(item=>{
    return(
        <>
  <h4 key={item.id} style={{color:"white",fontStyle:"italic"}}>  {item.soru}</h4>
  {formAttach(item.id)}
  </>
)}
    )    
    }
{cevaplandi?
<p>Teşekkür Ederiz</p>:<><br></br><button style={{width:"100%",backgroundColor:"orange",borderRadius:"1rem",maxWidth:"300px",marginTop:"0.1rem"}}>Cevapla</button></>
}
</form>
</div>
</>


    )
}

export default Anket