import React from 'react'

const ShortLinkComponent = (props:{link:string}) =>
{
    return(
        <div className="shortlink__container">
            <div className="shortlink__content">
                <span className="text">Short URL: </span>
                <span className="shortlink">{props.link}</span>
                <div className="copy__button" onClick={e=>navigator.clipboard.writeText(props.link)}>
                    <span className='copy__button__text'>Copy</span>
                </div>
            </div>
        </div>
    )
}
export default ShortLinkComponent