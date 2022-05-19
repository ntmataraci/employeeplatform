import { useEffect, useState } from "react"
import Replies from "../../component/Replies"
import asik from "./egitimRes/asik.jpg"

const KaliteFormu = (props) => {

const cevaplar=[
    {id:0,
soru:"Küre Çapı Ne Olmalı ?",
tanim:"Ø30",
tolerans:"-0.05",
min:"29.95",
max:"30"
    },
    {id:1,
    soru:"Büyük Konik Çapı Kaçtır ?",
tanim:"Ø20.4",
tolerans:"±0.05",
min:"20.35",
max:"20.45"
},
{id:2,
soru:"Parça Boyu Kaçtır ?",
tanim:"76,4",
tolerans:"±0.5",
min:"75.9",
max:"76.9"
},
{id:3,
soru:"Boğaz Çapı Kaçtır ?",
tanim:"Ø14.2",
tolerans:"Lütfen siz bulun",
min:"14",
max:"14.4"
}
]




    return(
        <>
        <div >
        <img style={{width:"100%",maxWidth:"1000px"}} src={asik}></img>
        </div>
        <div style={{color:"white",display:"flex",gap:"1rem",flexDirection:"column",margin:"0.5rem"}}>
            {cevaplar.map(item=>{
                return(
                    <>
              <div style={{display:"flex",flexDirection:"row",gap:"0.3rem",borderBottom:"0.2rem solid gray"}}>
       <div style={{width:"40%"}}> <p>{item.soru}</p></div>
       <div style={{display:"flex",flexDirection:"column",width:"10%",justifyContent:"center"}}>
            <div>{item.tanim}</div><div style={{fontSize:"0.8rem"}}>{item.tolerans}</div>
      </div>
      <div style={{width:"20%"}}>
        <Replies cevaplar={cevaplar} id={item.id} type={"min"}/>
        <Replies cevaplar={cevaplar} id={item.id} type={"max"}/>
          </div>
          </div>
       </>
                )
    })}
        </div>
        </>
    )
}

export default KaliteFormu