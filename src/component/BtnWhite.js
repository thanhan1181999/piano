import React,{useEffect,useState} from 'react';

export default function BtnWhite({config,play,heighlightKey}){
  let defaultClasss="piano-keys key-white";
  let[classOfBtn,setClassOfBtn]=useState(defaultClasss);
  useEffect(()=>{
    if(heighlightKey)
      if(heighlightKey.value===(config[0]+config[1])) setClassOfBtn(classOfBtn+" key-highlight");
    setTimeout(()=>setClassOfBtn(defaultClasss),500);
  },[heighlightKey]);

  return(
    <div onClick={()=>play(config)} className={classOfBtn}>
      <div className="key">{config[2].toUpperCase()}</div>
      <div className="node">{config[0]+config[1]}</div>
    </div>
  )
}