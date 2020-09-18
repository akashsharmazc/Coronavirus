import React,{useContext} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {GlobalContext} from '../contexts/GlobalState'
import moment from 'moment'
export const Header = () => {
    const {statedata,isbutton,GetData,stateentered,buttonclicked,Buttonclick}=useContext(GlobalContext)
function decider1()
{
    if(stateentered!=null)
    {
        return(<div id="lastupdated">
                <div id="last_updated"><h6>Last updated at {moment(statedata[0].createdAt).format('MMMM Do YYYY, h:mm:ss A')}
</h6></div>
            </div> )
    }
    else{
        return(<div id="lastupdated">
        <div id="last_updated"></div>
    </div>)
    }
}
function decider2()
{
    if(isbutton==true && stateentered!='Total')
    {
        return(<button  onClick={()=>Buttonclick('Total')}id="back-button"><img id="back-button-img" src="https://img.icons8.com/ios/50/000000/back--v1.png"/></button>)
    }
}
    return (
        <div id="Header">
        <a href='https://dryicons.com/free-icons/arrow-icons'></a>
<img  id="icon1" src="https://img.icons8.com/wired/64/000000/coronavirus.png"/>    
<h2>Covid-19 Tracker</h2>
       {decider1()}
       {decider2()}

        </div>
    )
}
