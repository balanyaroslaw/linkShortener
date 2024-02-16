import express, {Express, Request, Response, Router} from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import {LinkRouter} from './routers/LinkRouter'
import { resolve } from 'path';
class Server{
    private app:Express
    private router:Router = new LinkRouter().router
    private config():void
    {
        this.app.use(express.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
        this.app.use(cors())
        this.app.use('/', this.router)
    }

    constructor()
    {
        this.app = express()
        this.config()
    }

    public start():void
    {
        this.app.listen(8080, ()=>{console.log(200)})
    }
}

let server = new Server()
server.start()