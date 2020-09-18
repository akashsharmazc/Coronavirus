import React,{useContext} from 'react';
import {Autosuggestwidget} from './Autosuggest'
import {GlobalContext} from '../contexts/GlobalState'
import ReactLoading from 'react-loading';
export const Searchbar = () => {
    const {statedata,isbutton,GetData,stateentered,buttonclicked}=useContext(GlobalContext)

    function decider1()
    {
        if(!stateentered)return(<div><ReactLoading type="spin" color="#c9c9c9" height="100%" width="100%" /></div>)
        else{
            return (
                <Autosuggestwidget />
              
            )
        }
    }
    return decider1()
}
