

import './App.css';
import TemperatureProvider from './context/temperature.context.jsx';
import { useGeoLocation } from './geolocation';
import ForecastWeather from './components/forecastWeather';

import HomePage from './components/home';
import {  usePlaces, UsePlaces } from './custom-hook/googleApi';

function App() {
  const geolo = useGeoLocation()


  return (
    <TemperatureProvider>
    <div className="App">
     {/* <HomePage></HomePage> */}
     <ForecastWeather></ForecastWeather>
    </div>
    </TemperatureProvider>
   
  );
}

export default App;
