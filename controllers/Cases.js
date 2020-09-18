var mongoose = require('mongoose');
const {Case,States,Delta}=require('../models/Case')
const Axios=require("axios")
const codetostate={}
const statetocode={}
var datesobject={}
var moment=require('moment')
exports.StateData=async(req,res,next)=>
{
    try {
        var state=req.params.State
       var output= await Case.find().sort({"Date": -1}).limit(20);
        res.send(output)
    } catch (error) {
        return res.json(error)
    }
}
exports.SaveData=async(req,res,next)=>
{
    try {
        var cutoff = new Date();
cutoff.setDate(cutoff.getDate()-20);
        //console.log(Date.now())
        const data1=await Axios("https://api.covid19india.org/data.json")
   const data1_1=Object.values(data1.data.statewise)
   data1_1.map((obj)=>{
      codetostate[obj.statecode]=obj.state
      statetocode[obj.state]=obj.statecode
   })
    const data=await Axios("https://api.covid19india.org/v4/timeseries.json")
    
    const statesindata=Object.keys(data.data)
    const statesindata1=statesindata.map(state=>{
        return codetostate[state]
    })
    for(var i=0;i<statesindata.length;i++)
    {         
         for(var key in (data.data)[statesindata[i]].dates)
        {
            if(moment(key)>moment(cutoff))
            {
             const state1=statesindata1[i]
             const state2=statesindata[i]
             if(datesobject.hasOwnProperty(key)==false){
                 datesobject[key]={}
                datesobject[key][state1]={}
                datesobject[key][state1]=(data.data[state2]).dates[key]
                }
                if(datesobject.hasOwnProperty(key))
                {
                    
                        datesobject[key][state1]=(data.data[state2]).dates[key]
                }
         }
        }

      
    }
    var schemacollection=[]
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    for(var key in datesobject)
    {
        var new1={}
    var newschema={
      Date:key,
      createdAt:dateTime,
      Delta:datesobject[key]['Total'],
      States:Object.assign(new1,datesobject[key])
    }
    
    if(moment(key)>moment(moment(cutoff)))
    {
        //var new1=await Case.findOne({"Date":key})
        //var new1=await Case.findOneAndUpdate({Date:key},newschema, {upsert: true}); 
        schemacollection.push(newschema)
    }

}
res.send(schemacollection.reverse())
    } catch (error) {
        res.status(500).send(error)
    }
    }
    



