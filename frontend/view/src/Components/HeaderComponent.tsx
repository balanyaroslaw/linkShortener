import React from 'react'
import { useTranslation} from 'react-i18next';
const HeaderComponent = () =>
{
    const { t, i18n } = useTranslation();
    return(
        <header className="header">
            <div className="logo__container">
                <img src={require('../Assets/logo.png')} alt="" />
                <span className="logo__text">{t('logo')}</span>
            </div>
            <div className="language__container">
                <span className="language" onClick={e=>i18n.changeLanguage(e.currentTarget.innerText)}>UKR</span>
                <span className="slash language">/</span>
                <span className="language" onClick={e=>i18n.changeLanguage(e.currentTarget.innerText)}>ENG</span>
            </div>
        </header>
    )
}
export default  HeaderComponent