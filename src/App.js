

import './App.css';
import TemperatureProvider from './context/temperature.context.jsx';
import { useGeoLocation } from './geolocation';




function App() {
  const geolo = useGeoLocation()
  

  return (
    <TemperatureProvider>
    <div className="App">
     
    </div>
    </TemperatureProvider>
  );
}

export default App;
