import express from 'express'

const app = express()

app.listen(3000, ()=>{
    console.log("3000 activated")
})

app.get("/", (req,res)=>{

    res.send("Default endpoint")
})

app.get("/contact", (req,res)=> {
    
    res.send("Contatc info : DEvAshura")

})

app.get("/about", (req,res)=>{

    res.send("This is Port 3000")
})