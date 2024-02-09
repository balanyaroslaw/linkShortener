import React from 'react'

const MainComponent = () =>
{
    return(
        <div className="main__container">
            <div className="title__container">
                <span className="title__text">
                    yabaURL - the best link shortener service 
                </span>
            </div>
            <div className="input__container">
                <div className="input__main">
                    <input type="text" className='input'/>
                </div>  
            </div>
            <div className="additional-button__container">
                <span className="add__button">Want add your unique word for URL?</span>
            </div>
            <div className="button__container">
                <div className="cut__button">
                    <span className='button'>CUT</span>
                </div>
            </div>
        </div>
    )
}
export default MainComponent