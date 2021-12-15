import express from 'express'
import  mongoose from 'mongoose'
import dotenv from 'dotenv'
import regRoutes from './app/routes/authRoute.js'
import loginRouter from './app/routes/loginRoute.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import {ddd} from './app/controllers/authController.js'



dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
const URL = process.env.MONGO_DB_URL

app.use(cors({credentials:true,origin:'http://localhost:3000'}))
app.use(cookieParser())
app.use(express.json())

app.use('/v1', regRoutes) 
app.use('/v1', loginRouter) 





const start = async () => {
    try{
        await mongoose.connect(URL ,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        app.listen(PORT , ()=>console.log('server start')) 
    }
    catch (e){
        console.log(e.message)
        procces.exit(1)
    }
}

start()


