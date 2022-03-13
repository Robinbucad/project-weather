import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchProvider from './context/search.provider'
import CoordsProvider from './context/geocoding/coords.provider';
import GoogleProvider from './context/googleApiContext/google.provider';

//IDIOMAS
import global_es from './translation/es/global.json'
import global_en from './translation/en/global.json'

import activities_es from './translation/es/activities.json'
import activities_en from './translation/en/activities.json'
import card_es from './translation/es/card.json'
import card_en from './translation/en/card.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import TemperatureProvider from './context/temperature.context.jsx'

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
      activities: activities_es,
      card: card_es

    },
    en: {
      global: global_en,
      activities: activities_en,
      card: card_en
    },

  },
})



ReactDOM.render(
  <React.StrictMode>
    <CoordsProvider>
      <TemperatureProvider>
        < I18nextProvider i18n={i18next}>
          <GoogleProvider>
            <SearchProvider>
              <App />
            </SearchProvider>
          </GoogleProvider>
        </ I18nextProvider>
      </TemperatureProvider>

    </CoordsProvider>





  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
