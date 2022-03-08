import { useEffect, useState } from "react";
import { API_KEY } from "../../config";


 export function useSearchWeather(place){

    const [search, setSEarch] = useState([])
    
    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${place}&appid=${API_KEY.key}`)
        .then(r => r.json())
        .then(d => setSEarch(d))
    },[])

    return search
 }