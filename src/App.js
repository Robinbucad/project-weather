
import './App.css';
<<<<<<< HEAD
import CurrentActualWeather from './components/actualweather';


=======
import TemperatureProvider from './context/temperature.context.jsx';
import { useGeoLocation } from './geolocation';
import ForecastWeather from './components/forecastWeather';
>>>>>>> develop

import HomePage from './components/home';
import {  usePlaces, UsePlaces } from './custom-hook/googleApi';

function App() {
  const geolo = useGeoLocation()


  return (
    <TemperatureProvider>
    <div className="App">
<<<<<<< HEAD
 

    <CurrentActualWeather></CurrentActualWeather>

=======
    <HomePage></HomePage> 
      
>>>>>>> develop
    </div>
    </TemperatureProvider>
   
  );
}

export default App;
