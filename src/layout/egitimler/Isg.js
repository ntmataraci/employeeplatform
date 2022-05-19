import React,{useState} from "react"
const Isg = () => {
const [studySelection,setStudySelection]=useState(0)
const [loaded,setLoaded]=useState(false)
const studyHandler = (x)=>{
    studySelection!==x?setStudySelection(x):setStudySelection(0)
}

    return(
      <>
      <div style={{color:"white",margin:"1rem"}}>
<div style={studySelection==1?{backgroundColor:"gray",borderRadius:"2px"}:{backgroundColor:"inherit"}} onClick={()=>studyHandler(1)}>+ 1. Giriş, Tanımlar</div>
{studySelection===1&&
<div style={{backgroundColor:"silver",border:"1px solid black",color:"black",fontSize:"18px",lineHeight:"28px",letterSpacing:"-0.003rem",padding:"0.2rem"}}>
<h3>Risk Ve Tehlike Nedir ?</h3>
<p><b>Tehlike:</b> İşyerinde var olan ya da dışarıdan gelebilecek, çalışanı veya işyerini etkileyebilecek zarar veya hasar verme potansiyeli olan herşey.<br></br>
<b>Risk:</b> Tehlikeden kaynaklanacak kayıp, yaralanma ya da başka zararlı sonuç meydana gelme ihtimali.</p>
<h3>İş Kazası Neleri Kapsar ?</h3>
<ul>
<li>İş yerinde yaşanan bütün kazalar. </li>
<li>Görevlendirme sebebiyle dışarıda olunduğunda yaşanan kazalar (ör. seyahat gezisi yada yol servisi).</li>
<li>Emzirme izni sırasında yaşanan kazalar. </li>
<li>Firmaya ait taşıma araçlarında yaşanan kazalar. </li>
</ul>



</div>
}
<div onClick={()=>studyHandler(2)} style={studySelection==2?{backgroundColor:"gray",borderRadius:"2px"}:{backgroundColor:"inherit"}}>+ 2. Makinelerdeki Tehlikeler</div>
{studySelection===2&&
<div style={{backgroundColor:"silver",border:"1px solid black",color:"black"}}>
<h3 >Talaş Tehlikeleri</h3>
<div style={{display:"flex",flexWrap:"wrap",gap:"0.5rem",padding:"0.2rem"}}>
<div><img style={{maxWidth:"500px",width:"100%"}} src="https://www.kocalarmetal.com/wp-content/uploads/elementor/thumbs/hurda-demir-talasi-2-owtvhm0se3lrjekc9oo1dnc57fsjfkd1m0g7p0lz84.jpg"></img></div>
<ul style={{display:"flex",gap:"0.1rem",flexDirection:"column"}}>
<li><b>El Kesiği:</b> Çelik Talaşı sert ve keskindir. Çekme durumunda elde ve parmakta kesiklere sebep olabilir. <b>Eldiven ve kargaburun</b> ile talaş ayıklanmalıdır.</li>
<li><b>Göze Çapak Kaçması:</b> <u style={{color:"red"}}>Hava Tabancası ile çalışılırken.</u> Gözünüze talaş kaçabilir. Bu sebeple hava ile çalışmalarda kesinlikle <b>KKD Gözlük</b> kullanılmalıdır.</li>
</ul>
</div>

<h3 style={{display:"flex",gap:"0.1rem",flexDirection:"column"}} >Makine Tehlikeleri</h3>
<div><b>Döner Miller:</b> Çalışmakta olan bir tezgahın ayna, ayak, motor gibi aksamları <u>hem parça fırlatma hem operatörü içeri çekme</u> gücüne sahiptir. </div>
<div><b>Konveyör:</b> Çalışmakta olan bir konveyör kapağı söküldüğü takdirde zincire parmak sıkışması tehlikesine sahiptir.</div>
<div><b>Testere:</b> Çalışmakta olan testereye parmak yada herhangi bir uzuv ile dokunmak kopma riskine neden olur.</div>
<div><b>Presler:</b> Pres altına giren el ciddi yaralanmalara sebep olur. Bu tarz tezgahlarda <u>çift el mekanizmasıyla çalışılmalıdır.</u></div>
</div>
}
<div style={studySelection==3?{backgroundColor:"gray",borderRadius:"2px"}:{backgroundColor:"inherit"}} onClick={()=>studyHandler(3)}>+ 3. Meslek Hastalığı</div>
{studySelection===3&&
    <div style={{backgroundColor:"silver",border:"1px solid black",color:"black",padding:"0.2rem"}}>
<h3 >Gürültü</h3>
<p> Uzun süreli çalışmalarda gürültü, işitme kaybına sebep olur. İşletmemizde <b>dövmehane çalışanların kulaklık yada kulak tıkacı takması zorunludur.</b></p>
<h3 >Bel Fıtığı</h3>
<p>Ağırlıklar kişiye çok yüklenmeden. Uygun kaldırma yöntemiyle kaldırılmalıdır.</p>
<div style={{width:"100%"}}>
{!loaded&&<p style={{width:"100%",height:"clamp(350px, 60vh, 700px",textAlign:"center",display:"flex",alignItems:"center",fontSize:"3rem"}}>Yükleniyor...</p>}
<iframe onLoad={()=>setLoaded(true)}  style={{width:"100%",maxWidth:"700px",height:"clamp(350px, 60vh, 700px",display:loaded?"block":"none"}} src="https://www.youtube.com/embed/IlSqzcvXCa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


</div>
}
</div>
</>
    )
}

export default Isg