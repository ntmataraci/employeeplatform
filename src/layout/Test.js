import { useEffect, useState } from "react";
import { Sorular } from "./sorular/SorularBir";

const Test = () => {
  const [answerHandler, setAnswerHandler] = useState();
  const [questionNo, setQuestionNo] = useState(0);
  const [dogruCevapHandler, setDogruCevapHandler] = useState(0);
  const [yanlisCevapHandler, setYanlisCevapHandler] = useState(0);
  const [questionMark, setQuestionMark] = useState(0);
  const myAnswer = (x) => {
    setAnswerHandler(x);
  };

  const checkAnswer = (x) => {
    console.log(questionNo, Sorular.length);
    if (answerHandler == x) {
      setDogruCevapHandler(() => dogruCevapHandler + 1);
      setQuestionMark(1);
    } else {
      setYanlisCevapHandler(() => yanlisCevapHandler + 1);
      setQuestionMark(1);
    }
    if (questionNo==Sorular.length-1){
        setQuestionMark(98)
    }
  };

  const nextQuestion = () => {
    setAnswerHandler()
    questionNo < Sorular.length - 1
      ? setQuestionNo(() => questionNo + 1)
      : setQuestionNo(99);
    setQuestionMark(0);
  };

const stylingVal= (x) =>{
return(
    questionMark == 0
                ? answerHandler == x
                  ? { border: "1px solid white" }
                  : { border: "none" }
            : Sorular[questionNo].dogruCevap == x
                ? { border: "1px solid green" }
                : answerHandler==x ? { border: "1px solid red" } :{ border: "none" }
)
}

const buttonStyle= {
    width:"100px",
    backgroundColor:"tomato",
    borderRadius:"0.5rem"
}

  return (
    <>
      {questionNo != 99 ? (
        <div style={{ color: "white",marginLeft:"1rem" }}>
       <b>Soru :</b>   <h4> {Sorular[questionNo].soru}</h4>
          <h5>
            Doğru Cevap : {dogruCevapHandler} - Soru : 
             {" "+(dogruCevapHandler + yanlisCevapHandler) + "/" + Sorular.length}
          </h5>
          <p
            onClick={() => questionMark==0&&myAnswer("a")}
            style={
              stylingVal("a")
            }
          >
            a) {Sorular[questionNo].a}{" "}
          </p>
          <p
            onClick={() => questionMark==0&&myAnswer("b")}
            style={
                stylingVal("b")
            }
          >
            b){Sorular[questionNo].b}{" "}
          </p>
          <p
            onClick={() => questionMark==0&&myAnswer("c")}
            style={
                stylingVal("c")
            }
          >
            c){Sorular[questionNo].c}{" "}
          </p>
          <p
            onClick={() => questionMark==0&&myAnswer("d")}
            style={
                stylingVal("d")
            }
          >
            d){Sorular[questionNo].d}{" "}
          </p>
          {questionMark == 0 ? (
            <button style={buttonStyle} onClick={() => checkAnswer(Sorular[questionNo].dogruCevap)}>
              Cevapla
            </button>
          ) :
          questionMark==98 ?
          (
            <button style={buttonStyle} onClick={nextQuestion}>Bitir</button>
          )
          :
          (
            <>
          <p style={{backgroundColor:"#034f84",color:"white",fontWeight:"bold"}}>{Sorular[questionNo].aciklama}</p> 
            <button  style={buttonStyle} onClick={nextQuestion}>Sonraki Soru</button>
            </>
          )}
        </div>
      ) : (
        <div style={{ color: "white" }}>
          <p>Teşekkürler.</p>
          <p>Doğru Sayısı: {dogruCevapHandler}</p>
          <p>Yanlış Sayısı: {yanlisCevapHandler}</p>
          <p>Puan: {Math.floor((dogruCevapHandler / Sorular.length) * 100)}</p>
        </div>
      )}
    </>
  );
};

export default Test;
