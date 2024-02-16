import React from 'react'

const AdditionalComponent = ({passData}:{passData(word:string):void}) =>
{
    return(
        <div className="additional__container">
            <div className="additional__content">
                <div className="text__container">
                    <span className="additional__text">Enter word for URL</span>
                </div>
                <div className="input-additional__container">
                        <input type="text" className='input__additional' onChange={e=>passData(e.currentTarget.value)}/>
                </div> 
            </div>
        </div>
    )
}
export default  AdditionalComponent