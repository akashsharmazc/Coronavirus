import React,{useContext} from 'react';
import {GlobalContext} from '../contexts/GlobalState'
export const Statename = () => {
    const{stateentered,statedata}=useContext(GlobalContext)
    
        if(stateentered=="Total")
        {
            return( <div id="stateinfo">
                <div id="statename">
            <div id="state_name"> <h4>India</h4></div>
            
         </div>
         
         </div>)
        }
        else {  
            return( <div id="stateinfo">
                <div id="statename">
           <div id="state_name"> <h4>{stateentered}</h4>
           </div>
               </div>
        
                   </div>)
        
    }
    
        
}
