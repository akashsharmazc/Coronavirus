import React,{useContext} from 'react';
import {GlobalContext} from '../contexts/GlobalState'
import AnimatedNumber from '@jhonnold/react-animated-number';
import {
  LineChart, Line} from 'recharts';
var data = [
  ]

export const Tested = (props) => {
  const {statedata,stateentered}=useContext(GlobalContext)
  var i=0
  data=[...statedata].reverse().map(ele=>{
    if(i%2==0)
    {
    for(var key in ele.States[stateentered].total)
    {
      if(key=='tested')
      {
      return {pv:parseInt( ele.States[stateentered].total[key])}
      }
    }
  }
  i++
  })
  function datagather1()
  {
    for(var key in statedata[0].States[stateentered].total)
    {
      if(key=='tested')
      {
      return parseInt( statedata[0].States[stateentered].total[key])
      }
    }
  }
  function datagather2()
  {
    for(var key in statedata[1].States[stateentered].total)
    {
      if(key=='tested')
      {
      return parseInt(statedata[1].States[stateentered].total[key])
      }
    }
  }
  var newdatetested=datagather1()
  var olddatetested=datagather2()
    return (
        <div id="Tested">
          <div id="tested-text"><h2 style={{color:'#A100FF'}}>Tested</h2></div>
          <div><h4 style={{color:'#A100FF'}}>↑ {(newdatetested-olddatetested).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4></div>
          <div><h1  style={{color:'#A100FF'}}>{newdatetested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1></div>
            <LineChart width={200} height={100} data={data}>
        <Line type="monotone" dataKey="pv" stroke="#A100FF" strokeWidth={2} dot={false} />
      </LineChart>
        </div>
    )
}
