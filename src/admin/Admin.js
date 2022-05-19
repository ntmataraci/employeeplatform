import React,{useState} from "react"
const Admin = (props) =>{
    const [menu,setMenu]=useState(1)
    const selectedMenu= (x)=>{
        setMenu(x)
    }

    const selectedMenuStyle={
    
        color: "#39a9f9",
        backgroundColor: "#033b63",
        borderBottom: "3px solid orange",
        paddingRight:"1rem",
        padding: "0.35rem",
        
      
}



props.getSelectedMenu(menu)
    return(
        <>
         <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "1rem",
          backgroundColor: "#034f84",
          padding: "0 1rem",
          color: "white",
          fontWeight: "600",
          height: "2rem",
          alignItems: "center",
borderBottom:"1px solid gray",
cursor:"pointer",

        }}
      >
            <div style={menu===1?selectedMenuStyle:{padding: "0.35rem"}} onClick={()=>selectedMenu(1)}>Kullanıcı Bilgileri</div>
            <div style={menu===2?selectedMenuStyle:{padding: "0.35rem"}} onClick={()=>selectedMenu(2)}>Performans Girişleri</div>
            <div style={menu===3?selectedMenuStyle:{padding: "0.35rem"}} onClick={()=>selectedMenu(3)}>Öneri Bölümü</div>
            <div style={menu===3?selectedMenuStyle:{padding: "0.35rem"}} onClick={()=>selectedMenu(4)}>Anketler</div>
        </div>
        </>
    )
}

export default Admin