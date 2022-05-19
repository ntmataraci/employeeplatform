import React,{useState,useEffect} from "react"
const Performans = (props) =>{
console.log(props)
    
    return(
<>
<div style={{display:"flex",flexDirection:"column",color:"gray",gap:"0.2rem",flexWrap:"wrap"}}>
{props.sendPerformances&&
props.sendPerformances.map((item,idx)=>
<div key={idx} style={{display:"flex",flexDirection:"row",gap:"0.5rem",backgroundColor:idx%2==0?"orange":"tomato",color:"black",width:"max-content"}}><div>{item.Tarih} ---</div><div style={{fontWeight:"bold"}}>{item.Performans}</div></div>
)
}

</div>

</>
    )
}

export default Performans