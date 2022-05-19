import React,{useState,useEffect} from 'react'
const Header = (props) => {

const [changeMenuStyle,setChangeMenuStyle]=useState(1)

//performance main 
const [userData,setUserData]=useState()
const formData=new FormData()
const userInformation = async ()=>{
  formData["user"]=props.getInformation[0]
  formData["pass"]=props.getInformation[1]
  const data = await fetch(props.myurl+"/backend/userPerformance.php",{
    method:"POST",
    body:JSON.stringify(
      formData
    )
  }
  )

  const result=await data.json()
  setUserData(result)
  props.getPerformances(result)
}


const oneriAd = async ()=> {
  formData["user"]=props.getInformation[0]
  const data = await fetch("./backend/userOneri.php",{
    method:"POST",
    body:JSON.stringify(
      formData
    )
  }
  )
  const result=await data.json()
  props.getOneriQty(result.length)
}



useEffect(()=>
{
  props.getInformation[0]&&
userInformation()
oneriAd()
},[])









const changeMenu =(x)=>{
    props.getMenu(x)
    console.log(props.getInformation)
    setChangeMenuStyle(x)
}

const selectedMenuStyle={
    
        color: "#39a9f9",
        backgroundColor: "#033b63",
        borderBottom: "3px solid orange",
        padding: "0.35rem 0 0 0",
        cursor:"pointer"
      
}


  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "0.6rem",
          backgroundColor: "#034f84",
          padding: "0 1rem",
          color: "white",
          fontWeight: "600",
          height: "2rem",
          alignItems: "center",
borderBottom:"1px solid gray",
cursor:"pointer"

        }}
      >
        <div
      
          style={changeMenuStyle===1?selectedMenuStyle:{padding: "0.35rem"}}
   
          onClick={()=>changeMenu(1)}
        >
          Bilgiler
        </div>
        <div style={changeMenuStyle===2?selectedMenuStyle:{padding: "0.35rem"}}  onClick={()=>changeMenu(2)}>Eğitimler</div>
        <div style={changeMenuStyle===3?selectedMenuStyle:{padding: "0.35rem"}} onClick={()=>changeMenu(3)}>Performans</div>
        <div style={changeMenuStyle===4?selectedMenuStyle:{padding: "0.35rem"}}  onClick={()=>changeMenu(4)}>Öneri</div>
      </div>
    </>
  );
};

export default Header;
