const express=require('express')
const app=express()
const router=express.Router()
const{SaveData,StateData} =require('../controllers/Cases')
router.route('/').get(SaveData)
router.route('/latest/:State').get(StateData)
module.exports=router