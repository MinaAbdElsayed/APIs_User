const express = require ('express')
const bodyParser = require ('body-parser')
const mongoose = require ('mongoose')
const userRouter = require ('./Routes/userRoute.cjs')
const app =express()
app.use(bodyParser.json())


const url = "mongodb+srv://mina:mina@cluster0.i7jv1vb.mongodb.net/mina"

const conectDB = async() => {
    try {
        mongoose.set('strictQuery',false)
        mongoose.connect(url)
        console.log("Connected to MongoDB")
    } catch (err) {
        console.log("error while conect to mongodb" + err)
        process.exit
    }
    
}
conectDB()

app.use('/',userRouter )



app.listen(8000)