import React, { ReactElement,useEffect,useState } from 'react'
import axios from 'axios'
import {PostLink} from '../API/PostLink'
import ShortLinkComponent from './ShortLinkComponent'
function MainComponent()
{
    const [link, setLink] = useState<string>('')
    const [shortLink, setShortLink] = useState<string>('')

    const {post} = PostLink(link);

    const handleClick = (e:React.MouseEvent<HTMLElement>) =>
    {
        e.preventDefault()
        if(link)
        {
            setShortLink(post())
            setLink('')
        }
    }
    return(
        <div className="main__container">
            <div className="title__container">
                <span className="title__text">
                    yabaURL - the best link shortener service 
                </span>
            </div>
            {shortLink&&<ShortLinkComponent link={shortLink}/>}
            <div className="input__container">
                <div className="input__main">
                    <input type="text" className='input' onChange={e=>setLink(e.currentTarget.value)} value={link}/>
                </div>  
            </div>
            <div className="button__container" onClick={e=>{handleClick(e)}}>
                <div className="cut__button">
                    <span className='button'>CUT</span>
                </div>
            </div>
        </div>
    )
}
export default MainComponent