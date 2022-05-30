import express, { NextFunction, Request, Response } from 'express'; //import express
export const app = express(); //instantiate a new express app

//middleware
//express parses the call a string
//middlewate will make it to json
app.use(express.json())

//cors any other url can access this api

import cors from 'cors';
app.use(cors({ origin: true }));

import { createStripeCheckoutSession } from "./checkout";


/** create api endpoint for checkout session */

app.post (
    '/checkouts/', runAsync( async ({ body }: Request, res: Response) => {
        res.send(
            await createStripeCheckoutSession(body.line_items)
        )
    })
)


/** catch async errors when awaiting for promises */


function runAsync(callback: Function) {
    return ( req: Request, res: Response, next: NextFunction) => {
        callback(req, res, next).catch(next);
    }

}