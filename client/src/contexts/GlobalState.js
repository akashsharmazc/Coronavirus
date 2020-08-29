import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
import Axios from 'axios'
const initialstate={
    Transactions:{}
}
export const GlobalContext=createContext(initialstate)
export const GlobalProvider=({children})=>{
   const[state,dispatch]=useReducer(AppReducer,initialstate)
   async function GetData(text){
   try {
    const res1=await Axios.get("https://api.covid19india.org/v4/timeseries.json");
     dispatch({
         type:"STATE_DATA",
         payload:res1.data[text]
     })
     console.log(state.Transactions)
   } catch (error) {
    dispatch({
        type:'ERROR',
        payload:error.response.data.error
    })
   }
   }
   return(
     <GlobalContext.Provider value={{
         GetData
     }}>{children}</GlobalContext.Provider>
   )
}