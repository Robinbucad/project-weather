

import './App.css';
import { useGeoLocation } from './geolocation';

import HomePage from './components/home';

function App() {
  const geolo = useGeoLocation()
  

  return (
    <div className="App">
     <HomePage></HomePage>
    </div>
  );
}

export default App;
