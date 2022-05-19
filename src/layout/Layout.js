import Header from "./Header"
import React,{useEffect, useState} from 'react'
import Egitimler from "./Egitimler"
import Oneri from "./Oneri"
import Kimlik from "./Kimlik"
import Performans from "./Performans"
import Login from "./Login"
import Admin from "../admin/Admin"
import KullaniciBilgileri from "../admin/KullaniciBilgileri"
import PerformansEkle from "../admin/PerformansEkle"
import OneriOku from "../admin/OneriOku"
import AnketOku from "../admin/AnketOku"

const Layout=()=>{
const [selectMenu,setSelectMenu]=useState(1)
const [userName,setUserName]=useState()
const [auth,setAuth]=useState(false)
const [adminMenu,setAdminMenu]=useState(1)
const [performances,setPerformances]=useState()
const [oneriStateQty,setOneriStateQty]=useState()
//   const myurl="http://localhost/personelplatformu"
 const myurl="."

const getMenu =(x)=>{
  setSelectMenu(x)
}

// username
const getInformation=(x)=>{
    setUserName(x)
}

//auth pos
const authSit=(x)=>{
setAuth(x)
console.log(auth)
}

const sendInformation=()=>{
    return userName
}

const getSelectedMenu = (x) =>{
    setAdminMenu(x)
}

const getPerformances = (x)=> {
    setPerformances(x)
}

const oneriQty = (x)=>{
    setOneriStateQty(x)
}

return(
    <>
    {auth===false&&
    <Login getInformation={getInformation} authSit={authSit} myurl={myurl}/>
}
    {auth==="admin"&&
    <>
    <Admin getSelectedMenu={getSelectedMenu} />
    {adminMenu==3&&
    <OneriOku sendInformation={sendInformation} myurl={myurl}/>
}
{adminMenu==1&&
    <KullaniciBilgileri sendInformation={sendInformation} myurl={myurl}/> 
}
    {adminMenu==2&&
    <PerformansEkle sendInformation={sendInformation} myurl={myurl}/> 
}
{adminMenu==4&&
    <AnketOku sendInformation={sendInformation} myurl={myurl}/> 
}
    </>
}

{auth==="user"&&
<>


    <Header getMenu={getMenu} getInformation={userName} getPerformances={getPerformances} getOneriQty={oneriQty} myurl={myurl}/>
    {selectMenu===1&&
    <Kimlik getInformation={userName} sendPerformances={performances} sendOneriQty={oneriStateQty} myurl={myurl} />
}
    {selectMenu===2&&
    <Egitimler myurl={myurl}/>
}
{selectMenu===3&&
    <Performans getInformation={userName} sendPerformances={performances} myurl={myurl} />
}
{selectMenu===4&&
    <Oneri userName={userName} myurl={myurl}/>
} 
    </>
}
</>
)
}

export default Layout