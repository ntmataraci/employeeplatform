import React from "react"
import KaliteFormu from "./KaliteFormu"
const Kalite =(props)=>{
    return(
        <>
        <div style={{color:"white",padding:"0.5rem"}}>
<ul>
    <li>Yüzdelik olarak tanımlanan (0,01) ölçülerde <b>mikrometre</b> kullanılır.</li>
    <li>Ondalık olarak tanımlanan (0,1) ölçülerde <b>kumpas</b> kullanılır.</li>
    {/* <img style={{width:"100%",maxWidth:"500px"}} src={props.myurl+"/img/q_ballping.jpg"}></img> */}
    </ul>
        </div>
        <KaliteFormu myurl={props.myurl}/>
        </>
    )
}

export default Kalite