import React, { ReactElement,useEffect,useState } from 'react'
import { useTranslation} from 'react-i18next';
import {PostLink} from '../API/PostLink'
import ShortLinkComponent from './ShortLinkComponent'
function MainComponent()
{
    const {t} = useTranslation();
    const [link, setLink] = useState<string>('')
    const [shortLink, setShortLink] = useState<string>('')
    
    var {post} = PostLink(link);

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
                    {t('title')}
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
                    <span className='button'>{t('buttons.button1')}</span>
                </div>
            </div>
        </div>
    )
}
export default MainComponent