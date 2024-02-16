import React from 'react'
import { useTranslation} from 'react-i18next';
const ShortLinkComponent = (props:{link:string}) =>
{
    const {t} = useTranslation();
    return(
        <div className="shortlink__container">
            <div className="shortlink__content">
                <span className="text">{t('link')}</span>
                <span className="shortlink">{props.link}</span>
                <div className="copy__button" onClick={e=>navigator.clipboard.writeText(props.link)}>
                    <span className='copy__button__text'>{t('buttons.button2')}</span>
                </div>
            </div>
        </div>
    )
}
export default ShortLinkComponent