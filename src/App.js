
import './App.css';
import CurrentActualWeather from './components/actualweather';



import HomePage from './components/home';
import {  usePlaces, UsePlaces } from './custom-hook/googleApi';

function App() {
  const geolo = useGeoLocation()


  return (
    <TemperatureProvider>
    <div className="App">
 

    <CurrentActualWeather></CurrentActualWeather>

    </div>
    </TemperatureProvider>
  );
}

export default App;
