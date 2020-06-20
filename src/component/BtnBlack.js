import React,{useState,useEffect} from 'react';

export default function BtnBlack({config,play,heighlightKey}){
  let defaultClasss="piano-keys key-black";
  let[classOfBtn,setClassOfBtn]=useState(defaultClasss);
  useEffect(()=>{
    if(heighlightKey)
      if( heighlightKey.value===(config[0]+config[1])) setClassOfBtn(classOfBtn+" key-highlight");
    setTimeout(()=>setClassOfBtn(defaultClasss),500);
  },[heighlightKey]);
  
  return(
    <div onClick={()=>play(config)} className={classOfBtn} style={{left:config[2]}}>
      <div className="key">{config[3]}</div>
      <div className="node">{config[0]+config[1]}</div>
    </div>
  )
}