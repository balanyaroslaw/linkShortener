import {Request, Response, NextFunction} from 'express'
import {connection} from '../database/connection'
import { QueryError } from 'mysql2'
export class Middleware
{
    public validateLink(req:Request, res:Response, next:NextFunction):void
    {
        const full_link:string = req.body.link

        try
        {
            const newUrl = new URL(full_link);
            if(newUrl.protocol === 'http:' || newUrl.protocol === 'https:')
            {
                next()
            }
        } 
        catch (err)
        {
            res.status(400).json("It is not URL").end()
        }
    }

    public postLinkHandler(req:Request, res:Response, next:NextFunction):void
    {
        const full_link:string = req.body.link
        const SQL_checkExistRecord = "SELECT short_link FROM links.link_table WHERE full_link = (?)"
            connection.query(SQL_checkExistRecord,[full_link],
            (error:QueryError|null, response:any)=>
            {
                if (error)
                {
                    res.status(500).json(error).end()
                }
                else
                {
                    if(response.length === 0)
                    {
                        next()
                    }
                    else
                    {
                        res.status(200).json(response)
                    }
                }
            });
    }

    public postLinkWithWordHandler(req:Request, res:Response, next:NextFunction):void
    {
        const word:string = req.params.word
        
        const SQL_checkExistRecordWithWord:string = "SELECT short_link FROM links.link_table WHERE (short_link) = (?)"
        if(word.length >= 4)
        {
            connection.query(SQL_checkExistRecordWithWord,[word],(error:QueryError|null, response:any)=>
            {
                if (error)
                {
                    res.status(500).json(error).end()
                    return
                }
                else
                {
                    if(response.length === 0)
                    {
                        next()
                    }
                    else
                    {
                        res.status(409).json('Is word is used. Try another')
                    }
                }
            });
        }
        else
        {
            res.status(401).json("Short word. Try longer")
        }
    }
}