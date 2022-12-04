import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose /*,{ConnectOptions}*/ from "mongoose"

const app = express()
app.use(helmet())
app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.Promise = global.Promise

/*const options:ConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}*/

//mongoose.connect('mongodb://localhost:27017/app1db', options)
mongoose.connect('mongodb://localhost:27017/app1db')
mongoose.connection.on('error',function(err:any){
    console.log('MongoDB connection error: ' + err)
    process.exit(-1)
})



//const PORT = process.env.PORT || 3000
const port = 3000

import {router} from './routes/index'
app.use('/', router) 

app.listen(port)
console.log('listen on port ' + port)