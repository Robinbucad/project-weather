import CurrentWeather from './components/prueba';
import './App.css';
import { useCurrentWeather } from './custom-hooks/hook-currentWeather';


function App() {

  const tiempo = useCurrentWeather()
  console.log(tiempo)

  return (
    <div className="App">

        <CurrentWeather></CurrentWeather>


    </div>
  );
}

export default App;
