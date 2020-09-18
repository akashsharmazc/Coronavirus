import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
import Axios from 'axios'
const initialstate={
    Transactions:{},
    buttonclicked:false,
    State:null
}
export const GlobalContext=createContext(initialstate)
export const GlobalProvider=({children})=>{
   const[state,dispatch]=useReducer(AppReducer,initialstate)
    function Buttonclick(value)
   {
       try {
           dispatch({
               type:"BUTTON-CLICKED",
               payload:value
           })
           return state.buttonclicked
       } catch (error) {
           dispatch({
        type:'ERROR',
        payload:error
    })
       }
   }
   async function GetData(states){
   try {
    const res1=await Axios.get('/api/v1/data')

    //const res1=await Axios.get(`/api/v1/data/latest/${states}`)
     dispatch({
         type:"STATE_DATA",
         payload:[res1.data,states]
     })
   } catch (error) {
    dispatch({
        type:'ERROR',
        payload:error
    })
   }
   }
   return(
     <GlobalContext.Provider value={{
         GetData,
         Buttonclick,
         isbutton:state.buttonclicked,
         statedata:state.Transactions,
         stateentered:state.State
     }}>{children}</GlobalContext.Provider>
   )
}