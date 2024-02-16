import express from 'express'
import {Request, Response, Router} from 'express'
import { Controller } from "../controllers/LinkController";
import { Middleware } from '../middleware/LinkMiddleware';
export class LinkRouter
{
    public router:Router;
    private controller:Controller = new Controller()
    private middleware:Middleware = new Middleware

    private Routes():void
    {
        this.router.post('/api', this.middleware.validateLink,this.middleware.postLinkHandler, (req:Request, res:Response)=>{
            this.controller.link = req;
            this.controller.postLink(req, res);
        })
        
        this.router.post('/api/:word', this.middleware.validateLink, this.middleware.postLinkWithWordHandler,this.middleware.postLinkHandler,(req:Request, res:Response)=>{
            this.controller.link = req;
            this. controller.postLinkWithUniqueWord(req, res)
        })
        
        this.router.get('/api/:link', (req:Request, res:Response)=>{
            this.controller.getFullLink(req, res);
        })
    }

    constructor()
    {
        this.router = express()
        this.Routes()
    }

}