import React,{useContext} from 'react';
import {GlobalContext} from '../contexts/GlobalState'

import {
  LineChart, Line
} from 'recharts';

var data = [];

export const Recovered = () => {
  const {statedata,stateentered}=useContext(GlobalContext)
  var i=0
  data=[...statedata].reverse().map(ele=>{
    if(i%2==0)
    {
    for(var key in ele.States[stateentered].total)
    {
      if(key=='recovered')
      {
      return {pv:parseInt( ele.States[stateentered].total[key])}
      }
    }
  }
  i++
  })
  function datagather1()
  {
    for(var key in  statedata[0].States[stateentered].total)
    {
      if(key=='recovered')
      {
      return parseInt( statedata[0].States[stateentered].total[key])
      }
    }
  }
  function datagather2()
  {
    for(var key in  statedata[1].States[stateentered].total)
    {
      if(key=='recovered')
      {
      return parseInt( statedata[1].States[stateentered].total[key])
      }
    }
  }
  var newdaterecovered=datagather1()
  var olddaterecovered=datagather2()
    return (
        <div id="Recovered">
          <div><h2 style={{color:'#00821D'}}>Recovered</h2></div>
          <div><h4 style={{color:'#00821D'}}>↑ {Math.abs(olddaterecovered-newdaterecovered).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4></div>
    <div><h1 style={{color:'#00821D'}}>{newdaterecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1></div>
          
            <LineChart width={200} height={100} data={data}>
        <Line type="monotone" dataKey="pv" stroke="#3ab546" strokeWidth={2} dot={false} />
      </LineChart>
        </div>
    )
}
