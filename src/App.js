import CurrentWeather from './components/prueba';
import CurrentActualWeather from './components/actualweather';
import './App.css';
import { useCurrentWeather } from './custom-hooks/hook-currentWeather';


function App() {



  return (
    <div className="App">

    
      <CurrentActualWeather></CurrentActualWeather>

    </div>
  );
}

export default App;
