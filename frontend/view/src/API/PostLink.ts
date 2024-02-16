import React, {FC, ReactElement, useEffect,useState} from 'react'
import axios from 'axios'

const PostLink = (link:string) => 
{
    const [shortLink, setShortLink] = useState<string>('');
    const URL = 'http://localhost:8080/api/'
    const post = () =>
    {
        const data = axios.post(URL,{link:link})
        .then(response=>{
            setShortLink(URL+response.data[0].short_link)
        })
        .catch(error=>{console.log(error)})
        return shortLink
    }

    post()

    return {post}
}
export {PostLink}