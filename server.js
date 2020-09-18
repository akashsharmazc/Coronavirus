const express=require('express')
const app=express()
const Cases=require('./routes/Cases')
const colors=require('colors')
const dotenv=require('dotenv')
const Axios=require('axios')
const connectDB=require('./config/db')
const path=require('path')
dotenv.config({path:'./config/config.env'})
app.use(express.json())
app.use('/api/v1/data',Cases)
var t
connectDB()
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}
const PORT=process.env.PORT || 3000

app.listen(PORT,()=>console.log(`Server is up and running at Port ${PORT}`.red.bold))
module.exports=t