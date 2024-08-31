import { useState } from 'react';
import './App.css'
function App() {
  let[Value,setValue]=useState('');
  let[mode,setmode]=useState('boy')
 function getvalue(event){
  setValue(Value+event.target.value)//Value=pastvalue & eventvalue=nowvalue (important thing)
 }
 function delall(){
  setValue('')
 }
 function delone(){
  setValue(Value.slice(0,-1))//del last number in value
 }
function equal(){
  setValue(eval(Value))
}
function modetogle(){
  if(mode==='boy'){
    setmode('girl')
  }else{
    setmode('boy')
  }
}
  return (
    <div style={mode==='boy'?{background:"#CEDF9F"}:{background:"#FFC6C6"}} className='alldiv'>
      <div style={{position:"absolute",top:"10px",left:"10px"}}><label className="switch">
  <input onClick={modetogle} type="checkbox"/>
  <span className="slider"></span>
 </label></div>
 
      <div style={mode==='boy'? {backdropFilter:"#A1D6B2"}:{background:"#F0A8D0"}} className='calbody'>
        <div className='show'><input style={{cursor:"text",height:"75%"}} type='text' value={Value}/></div>
        <hr/>
        <div className='btns'>
          <div className='r1'>  <input onClick={()=>{delall()}} type='button' value='AC'/>  <input onClick={()=>{delone()}} type='button' value='Del'/> <input onClick={getvalue} type='button' value='.'/>  <input onClick={getvalue} type='button' value='/'/></div>
          <div className='r1'>  <input onClick={getvalue} type='button' value='7'/>   <input onClick={getvalue} type='button' value='8'/>  <input  onClick={getvalue} type='button' value='9'/>  <input onClick={getvalue} type='button' value='*'/></div>
          <div className='r1'>  <input onClick={getvalue} type='button' value='4'/>   <input onClick={getvalue} type='button' value='5'/>  <input  onClick={getvalue} type='button' value='6'/>  <input onClick={getvalue} type='button' value='+'/></div>
          <div className='r1'>  <input onClick={getvalue} type='button' value='1'/>   <input onClick={getvalue} type='button' value='2'/>  <input  onClick={getvalue} type='button' value='3'/>  <input onClick={getvalue} type='button' value='-'/></div>
          <div className='r1'>  <input onClick={getvalue} style={{width:"23.5%"}} type='button' value='00'/>   <input onClick={getvalue} style={{width:"23.5%"}} type='button' value='0'/>  <input disabled={!Value} onClick={equal} style={{width:"52.5%"}} type='button' value='='/></div>
        </div>
        <h4 style={{padding:"0"}}>by <a style={{color:"black"}} href='https://t.me/hasanasa1'>Hassan.Asa</a></h4>
      </div>
    </div>
  )
}

export default App;
