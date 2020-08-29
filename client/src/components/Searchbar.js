import React,{useContext,useState} from 'react';
import {GlobalContext} from '../contexts/GlobalState'

export const Searchbar = () => {
    const [text,settext]=useState('')
  const {GetData}=useContext(GlobalContext)
    return (
             <div className="Search">
      <input type="text" placeholder="Search for a State or City" value={text} onChange={(e)=>settext(e.target.value)}id="searchbar"/>
      <button id="button1" onClick={()=>GetData(text)}>Submit</button>
      </div>
        
    )
}
