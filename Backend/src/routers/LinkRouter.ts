import express from 'express'
import {Request, Response} from 'express'
import { Controller } from "../controllers/LinkController";
const router = express()
let controller = new Controller()
router.post('/api', (req:Request, res:Response)=>{
    controller.link = req;
    controller.postLink(req, res);
})
router.get('/api/:link', (req:Request, res:Response)=>{
    controller.getFullLink(req, res);
})

export default router