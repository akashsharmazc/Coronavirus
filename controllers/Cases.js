var mongoose = require('mongoose');
const {Case,States,Delta}=require('../models/Case')
const Axios=require("axios")
const codetostate={}
const statetocode={}
var datesobject={}
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
        //console.log(Date.now())
        await Case.collection.drop()
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
    var schemacollection=[]
    for(var key in datesobject)
    {
        var new1={}
    var newschema=new Case({
      Date:key,
      Delta:datesobject[key]['Total'],
      States:Object.assign(new1,datesobject[key])
    })
    
    newschema.save(function(err,doc){
    if(err)return console.err;
    schemacollection.push(doc)
    })
    
}
res.send(schemacollection)
    } catch (error) {
        res.status(500).send(error)
    }
    }
    



