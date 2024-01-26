import {Request, Response} from 'express'
import {ILink} from '../model/LinkModel'
import {connection} from '../database/connection'
import {Service} from '../service/LinkDecline'
import { QueryError } from 'mysql2'
export class Controller
{
    private _service = new Service()
    private _link:ILink
    public set link(req:Request)
    {
        if(req.body.link)
        {
            this._link = {full_link: req.body.link, short_link:this._service.LinkDecline()}
        }
    }
    public getFullLink(req:Request, res:Response){
        const SQLquery:string = "SELECT full_link FROM links.link_table WHERE short_link=(?)"
            connection.query(SQLquery,[req.params.link],
            (error:QueryError|null, response:any)=>
            {
                if (error)
                {
                    res.status(500).json(error).end()
                    return
                }
                else
                {
                    if(response.length!==0)
                    {
                        res.status(200).json(response).end()
                    }
                    else
                    {
                        res.status(404).json("Not Found").end()
                    }
                }
            });
    }
    public postLink (req:Request, res:Response)
    {
        if(this._link.full_link && this._link.short_link)
        {
            const SQLquery:string = "INSERT INTO links.link_table (full_link, short_link) VALUES (?)"
            const link_values:string[] = [this._link.full_link, this._link.short_link]
            connection.query(SQLquery,[link_values],
            (error:QueryError|null, response:any)=>
            {
                if (error)
                {
                    res.status(500).json(error).end()
                    return
                }
                else
                {
                    res.status(200).json(this._link.short_link).end()
                }
            });
        }
    } 
}