const express=require('express')
const cors=require('cors')

const app=express()

const port=6000


app.get('/api/google-login',(req,res)=>{
    // code
    res.send({message:'Google Login Successfull'})
})

app.get('/api/facebook-login',(req,res)=>{
    // code
    res.send({message:'Facebook Login Successfull'})
})

app.listen(port,()=>{
    console.log(`server runnig on the port :${port}`)
})