import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import {db, verifyConnection} from './models/db.js'
dotenv.config()

const app = express()

app.use(morgan("dev"))

const PORT = process.env.PORT

const setUpServer = async () =>{
    try{
        await verifyConnection();
        app.listen(PORT, ()=>{
            console.log("Server is running in port", PORT)
        })
    }
    catch(error){
        console.error(error)
    }
}

setUpServer()