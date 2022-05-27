import express, { Request, Response } from 'express'; //import express
export const app = express(); //instantiate a new express app

//middleware
//express parses the call a string
//middlewate will make it to json
app.use(express.json())

//cors any other url can access this api

import cors from 'cors';
app.use(cors({ origin: true }));


app.post('/test',(req: Request, res: Response) => {

    const amount = req.body.amount;
    res.status(200).send({with_tax: amount  * 7});

});