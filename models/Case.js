const mongoose=require('mongoose')
var Schema = mongoose.Schema;
const StateSchema=new mongoose.Schema({
    "Andaman and Nicobar Islands":Schema.Types.Mixed,
    "Andhra Pradesh":    Schema.Types.Mixed,
    "Arunachal Pradesh": Schema.Types.Mixed,
    "Assam":             Schema.Types.Mixed,
    "Bihar":             Schema.Types.Mixed,
    "Chandigarh":        Schema.Types.Mixed,
    "Chhattisgarh":      Schema.Types.Mixed,
    "Delhi":             Schema.Types.Mixed,
    "Dadra and Nagar Haveli and Daman and Diu": Schema.Types.Mixed,
    "Goa": Schema.Types.Mixed,
    "Gujarat": Schema.Types.Mixed,
    "Himachal Pradesh": Schema.Types.Mixed,
    "Haryana": Schema.Types.Mixed,
    "Jharkhand": Schema.Types.Mixed,
    "Jammu and Kashmir": Schema.Types.Mixed,
    "Karnataka": Schema.Types.Mixed,
    "Kerala": Schema.Types.Mixed,
    "Ladakh": Schema.Types.Mixed,
"Lakshadweep": Schema.Types.Mixed,
"Maharashtra": Schema.Types.Mixed,
"Meghalaya": Schema.Types.Mixed,
"Manipur": Schema.Types.Mixed,
"Madhya Pradesh": Schema.Types.Mixed,
"Mizoram": Schema.Types.Mixed,
"Nagaland": Schema.Types.Mixed,
"Odisha": Schema.Types.Mixed,
"Punjab": Schema.Types.Mixed,
"Puducherry": Schema.Types.Mixed,
"Rajasthan": Schema.Types.Mixed,
"Sikkim": Schema.Types.Mixed,
"State Unassigned":Schema.Types.Mixed,
"Telangana": Schema.Types.Mixed,
"Total":Schema.Types.Mixed,
"Tamil Nadu": Schema.Types.Mixed,
"Tripura": Schema.Types.Mixed,
"Uttar Pradesh": Schema.Types.Mixed,
"Uttarakhand": Schema.Types.Mixed,
"West Bengal": Schema.Types.Mixed
})
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
const CasesSchema=new mongoose.Schema({
    Date:{
        type:Date,
        required:[true,'Please provide Date'],
        unique:true
    },
    createdAt:{
        type:Date,
        default:dateTime
       },
    Delta:Schema.Types.Mixed,
    States:StateSchema   
})
module.exports.Case=mongoose.model('Case',CasesSchema)
module.exports.States=mongoose.model('States',StateSchema)
