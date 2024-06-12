const express = require("express")
const mongoose = require("mongoose")
const cors =  require("cors")
const {cinemamodel} = require("./models/cinema")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://Nevin:nevintensonk@cluster0.0rfrr.mongodb.net/cinemadb?retryWrites=true&w=majority&appName=Cluster0')

app.post("/add",(req,res)=>{
    const input = req.body
    const cinema = new cinemamodel(input)
    cinema.save()
    console.log(cinema)
    res.json({status:"success"})

    
})

app.post("/search",(req,res)=>{
    const input = req.body
    cinemamodel.find(input).then(
        (data)=>{
            res.json(data)
            

        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
    


})

app.post("/delete",(req,res)=>{
    let input = req.body
    cinemamodel.findByIdAndDelete(input._id).then(
        (response)=>{
            
            
            res.json({Status:"success"})
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})



app.get("/view",(req,res)=>{
    cinemamodel.find().then(
        (data)=>{
            res.json(data)

        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})





app.listen(8008,()=>{
    console.log("server started")
})
