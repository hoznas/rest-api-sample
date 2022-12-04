import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
app.use(helmet())
app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//const PORT = process.env.PORT || 3000
const port = 3000

app.get('/helloworld',(req,res)=>{
    res.status(200).send({message: "Hello world!"})
})

app.listen(port)
console.log('listen on port ' + port)