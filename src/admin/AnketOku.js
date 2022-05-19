import { useEffect, useState } from "react"
import { SorularAnket } from "../layout/sorular/SorularAnket"

const groupReducer = (datalist,section)=>{
    const arrayingObj=[datalist.map((item)=>item[section])][0]
    const sumOfSection=arrayingObj.reduce((r,c) => (r[c] = (r[c] || 0) + 1,r), {})
    return sumOfSection
    }



const AnketOku = (props) => {
const [sectionInformation,setSectionInformation]=useState()
const [anketData,SetAnketData]=useState()
const [ortalamaInformation,setOrtalamaInformation]=useState()
    const AnketOkuConnection = async() => {
const data = await fetch(props.myurl+"/backend/anket.php?anket=2")
const result = await data.json()
const birAvg=Math.floor(result.reduce((a,b)=>+a+(+b.bir),0)/result.length*10)/10
const ikiAvg=Math.floor(result.reduce((a,b)=>+a+(+b.iki),0)/result.length*10)/10
const ucAvg=Math.floor(result.reduce((a,b)=>+a+(+b.uc),0)/result.length*10)/10
const dortAvg=Math.floor(result.reduce((a,b)=>+a+(+b.dort),0)/result.length*10)/10
const besAvg=Math.floor(result.reduce((a,b)=>+a+(+b.bes),0)/result.length*10)/10
const altiAvg=Math.floor(result.reduce((a,b)=>+a+(+b.alti),0)/result.length*10)/10
const yediAvg=Math.floor(result.reduce((a,b)=>+a+(+b.yedi),0)/result.length*10)/10
const sekizAvg=Math.floor(result.reduce((a,b)=>+a+(+b.sekiz),0)/result.length*10)/10
const dokuzAvg=Math.floor(result.reduce((a,b)=>+a+(+b.dokuz),0)/result.length*10)/10
const onAvg=Math.floor(result.reduce((a,b)=>+a+(+b.onData),0)/result.length*10)/10
const ortalamalar=[birAvg,ikiAvg,ucAvg,dortAvg,besAvg,altiAvg,yediAvg,sekizAvg,dokuzAvg,onAvg]
// const cinsiyet=[result.map(item=>item.cinsiyet)][0]
// const cinsiyetSum=cinsiyet.reduce((r,c) => (r[c] = (r[c] || 0) + 1,r), {})

const cinsiyetSum = groupReducer(result,"cinsiyet")
const bolumSum = groupReducer(result,"bolum")
const egitimSum = groupReducer(result,"egitim")
const sureSum = groupReducer(result,"sure")
const allData=[cinsiyetSum,bolumSum,egitimSum,sureSum]
setSectionInformation(allData)
setOrtalamaInformation(ortalamalar)

SetAnketData(result)
    }




    useEffect(()=>{AnketOkuConnection()
        sectionInformation&&
    console.log(sectionInformation)
    },[])

    return(
        <>
        <div style={{color:"white",display:"flex",flexDirection:"column"}}>
        {sectionInformation&&sectionInformation.map(item=>
            {
                return(
<div>
<h4>{Object.keys(item).map(underitem=>{
    return(
  <div style={{display:"flex",gap:"1rem",textAlign:"right",marginLeft:"1rem",width:"10%",minWidth:"300px"}}><div style={{width:"75%"}}> {underitem}</div><div style={{textAlign:"right",width:"20%"}}>{item[underitem]}</div></div>
        )})}  </h4> 

</div>
                )
            }
            )}
      <div> {ortalamaInformation&&ortalamaInformation.map((ortItem,idx)=>{
      return(
          <>
          <div style={{border:"1px solid gray",padding:"1rem"}}>
      <p>{SorularAnket[idx].soru}</p>
      <p style={{textAlign:"center",fontSize:"1.5rem",color:"white"}}>{ortItem}</p>
      </div>
      </>
      )
      }
      )
    }
    
      
      </div> 
            </div>
        </>
    )
}

export default AnketOku