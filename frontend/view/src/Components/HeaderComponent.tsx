import React from 'react'

const HeaderComponent = () =>
{
    return(
        <header className="header">
            <div className="logo__container">
                <img src={require('../Assets/logo.png')} alt="" />
                <span className="logo__text">LINK SHORTENER</span>
            </div>
            <div className="language__container">
                <span className="language">UKR</span>
                <span className="slash language">/</span>
                <span className="language">ENG</span>
            </div>
        </header>
    )
}
export default  HeaderComponent