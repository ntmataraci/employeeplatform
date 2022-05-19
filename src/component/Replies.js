import { useState } from "react"
const Replies = (props) => {

    const [replies,setReplies]=useState()

    const replyQuestions = (x,id,type)=>{
    props.cevaplar[id][type]==x.target.value.replaceAll(",",".")?setReplies(true):setReplies(false)

    }
    
    return(
        <><div style={{display:"flex",padding:"0.5rem"}}>
    <div style={{marginRight:"0.5rem"}}>{props.type} </div>  <input type="text"  onChange={(x)=>replyQuestions(x,props.id,props.type)} 
        style={replies?{backgroundColor:"#7FFF00",width:"80px"}:{backgroundColor:"#DC143C",width:"80px"}}></input>
        <div style={{marginLeft:"-1.5rem"}}>
{replies?<div style={{color:"black"}}>Ok</div>:<div>X</div>}</div>
</div>
        </>
    )
}

export default Replies