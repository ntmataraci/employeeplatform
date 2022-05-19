import React,{useState} from 'react'
import { ImHeadphones } from 'react-icons/im';
import { MdHighQuality } from 'react-icons/md';
import { MdOutlinePlayLesson } from 'react-icons/md';
import Isg from './egitimler/Isg';
import Kalite from "./egitimler/Kalite"
import Teknik from "./egitimler/Teknik"


const Egitimler = (props) => {
const [section,setSection]=useState(1)

const sectionHandler = (x)=>{
  setSection(x)
}
  return (
    <>
    <div style={{color:"white",fontSize:"3rem",display:"flex",fill:"white",justifyContent:"center",gap:"1rem"}}>
<div style={{position:"relative",filter:section==1?"brightness(1":"brightness(0.5)"}}><div onClick={()=>sectionHandler(1)} ><ImHeadphones/></div><div style={{fontSize:"1.1rem",position:"absolute",bottom:"-10px",left:"50%",transform:"translateX(-50%)"}}>ISG</div></div>
<div style={{position:"relative",filter:section==2?"brightness(1":"brightness(0.5)"}}><div onClick={()=>sectionHandler(2)} ><MdHighQuality/></div><div style={{fontSize:"1.1rem",position:"absolute",bottom:"-10px",left:"50%",transform:"translateX(-50%)"}}>Teknik</div></div>
<div style={{position:"relative",filter:section==3?"brightness(1":"brightness(0.5)"}}><div onClick={()=>sectionHandler(3)} style={section==3?{filter:"brightness(1)"}:{filter:"brightness(0.5)"}}><MdOutlinePlayLesson/></div><div style={{fontSize:"1.1rem",position:"absolute",bottom:"-10px",left:"50%",transform:"translateX(-50%)"}}>Test</div></div>
</div>

{section===1 &&
<div><Isg/></div>}
  {section===2 &&
<div><Kalite myurl={props.myurl}/></div>}
{section===3 &&
<div><Teknik myurl={props.myurl} userName={props.userName}/></div>}

    {/* <div style={{width:"100%"}} className="youtube">
      <iframe
          width="100%"
          height="480"
        src="https://www.youtube.com/embed/e1nxy4lmjY4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      </div> */}
    </>
  );
};

export default Egitimler;
