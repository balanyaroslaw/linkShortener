import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'ENG',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ENG: {
        translation: {
          logo:"LINK SHORTENER",
          title:"yabaURL - the best link shortener service",
          buttons:{
            button1:"CUT",
            button2:"COPY"
          },
          link:"Short URL:"
        }
      },
      UKR: {
        translation: {
            logo:"СКОРОЧУВАЧ ПОСИЛАНЬ",
            title:"yabaURL - найкращий скорочувач посилань",
            buttons:{
                button1:"СКОРОТИТИ",
                button2:"СКОПІЮВАТИ"
              },
            link:"Коротке URL:"
        }
      }
    }
  });

export default i18n;