import express from 'express'
import con from '../modal/modal.js'

const Router = express.Router()


Router.get('/login',(req,res)=>{
    const sql = 'SELECT * FROM `login_info`'
    con.query(sql,(err,result)=>{
        res.json(result)
    })
})
Router.get('/appointment',(req,res)=>{
    const sql ='SELECT * FROM `doctor_appointment`'
    con.query(sql,(err,result)=>{
        res.json(result)
    })
})

export default Router