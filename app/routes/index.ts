import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { TestService, ITest }  from '../services/TestService'
import { TestMongoService } from '../services/TestMongoService'

const app = express();
app.use(helmet());
app.use(cors());

export const router = express.Router()

router.get('/helloworld',(req,res)=>{
    res.status(200).send({message: "Hello world!"})
})

router.get('/test',(req,res,next) => {
    const service = new TestService()
    service
        .test()
        .then(result => res.status(200)
                           .send(result))
        .catch(next)
})

router.get('/test/mongo/:user',(req,res,next) => {
    const {user} = req.params
    const service = new TestMongoService()
    console.log(user)
    service
        .run(user)
        .then(result => res.status(200)
                           .send(result))
        .catch(next)
})

app.use((req,res)=>{
    res.status(404)
    res.render(
        'error',
        {  param: {status:404, message:'not found'}  }
    )
})
