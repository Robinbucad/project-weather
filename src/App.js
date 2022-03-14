
import './App.css';

import TemperatureProvider from './context/temperature.context.jsx';
import { useGeoLocation } from './geolocation';
import HomePage from './components/home/';



function App() {


  return (

    <div className="App">

    <HomePage></HomePage> 


    </div>

  );
}

export default App;

