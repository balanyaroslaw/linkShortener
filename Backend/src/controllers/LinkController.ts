import {Request, Response} from 'express'
import {ILink} from '../model/LinkModel'
import {connection} from '../database/connection'
import {Service} from '../service/LinkDecline'
import { QueryError } from 'mysql2'
export class Controller
{
    private _service:Service = new Service()
    private _link:ILink
    public set link(req:Request)
    {
        if(req.body.link.length)
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
                }
                else
                {
                    if(response[0].full_link)
                    {
                        res.redirect(response[0].full_link)
                        res.end()
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
            const SQL_insertData:string = "INSERT INTO links.link_table (full_link, short_link) VALUES (?,?)"

            const link_values:string[] = [this._link.full_link, this._link.short_link]

            connection.query(SQL_insertData,link_values,(error:QueryError|null, response:any)=>
            {
                if(error)
                {
                    res.status(500).json(error).end()
                }
                else
                {
                    res.status(201).json(this._link.short_link)
                }
            })
        }
    } 

    public postLinkWithUniqueWord = (req:Request, res:Response) =>
    {

        const word:string = req.params.word
        console.log(req.params)
        const SQL_insertData:string = "INSERT INTO links.link_table (full_link, short_link) VALUES (?,?)"
    
        const link_values:string[] = [this._link.full_link, word]

        connection.query(SQL_insertData,link_values,(error:QueryError|null, response:any)=>
        {
            if(error)
            {
                res.status(500).json(error).end()
            }
            else
            {
                res.status(201).json(word)
            }
        })
    }
}