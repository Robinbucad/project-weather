import { useState, useEffect, useContext } from "react"
import { IdiomContext, TemperatureContext } from "../../context/temperature.context.js"
import { API_KEY } from "../../config"

import { CoordContext } from "../../context/geocoding/coords.context.js"
import { GoogleContext } from "../../context/googleApiContext/google.context.js"
import { SearchContext } from "../../context/search.context.js"
import { useGeoLocation } from "../../geolocation/index.js"

const latLoc = localStorage.getItem('lat')
const lonLoc = localStorage.getItem('lon')

export const useMoreCities = () => {
    const [unit,updateUnit] = useContext(TemperatureContext)
    const [lat, updatelat, lon, updateLon ] = useContext(CoordContext)
    const [cities, updateCities] = useState([])
    const [lng,updateLng] = useContext(IdiomContext)
    const [placeSearch, updatePlaces] = useContext(GoogleContext)
    const [city] = useContext(SearchContext)
    const coord = useGeoLocation()
  

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat === '' ? '50' : lat}&lon=${lon === '' ? '50' : lon}&units=${unit}&appid=1a1e6b25ceb11d049c296f3b556eb6d6&&lang=${lng}}}`)
            .then(r => r.json())
            .then(d =>{
                updateCities([d])
            }  )
            

    }, [unit,lat,lon])
    
    return {  cities}
}