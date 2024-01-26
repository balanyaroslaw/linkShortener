import express, {Express, Request, Response} from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import router from './routers/LinkRouter'
import { resolve } from 'path';
class Server{
    private app:Express
    private config():void
    {
        this.app.use(express.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
        this.app.use('/',router)
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