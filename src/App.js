
import './App.css';

import TemperatureProvider from './context/temperature.context.jsx';
import { useGeoLocation } from './geolocation';
import HomePage from './components/home/';


function App() {
  const geolo = useGeoLocation()


  return (
    <TemperatureProvider>
    <div className="App">

    <HomePage></HomePage> 
    

    </div>
    </TemperatureProvider>
   
  );
}

export default App;
