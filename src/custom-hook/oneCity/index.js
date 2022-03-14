
import { useState, useEffect, useContext } from "react"
import { API_KEY } from "../../config.js"
import { CoordContext } from "../../context/geocoding/coords.context.js"
import { GoogleContext } from "../../context/googleApiContext/google.context.js"
import { SearchContext } from "../../context/search.context.js"
import { IdiomContext, TemperatureContext } from "../../context/temperature.context.js"
import { useGeoLocation } from "../../geolocation/index.js"



const latLoc = localStorage.getItem('lat')
const lonLoc = localStorage.getItem('lon')

export const useOneCity = () => {

    const [unit] = useContext(TemperatureContext)
    const [lat, updatelat, lon, updateLon ] = useContext(CoordContext)
    const [cityOne,updateCity] = useState([])
    const [city, updateSearchCity] = useContext(SearchContext)
    const [lng,updateLng] = useContext(IdiomContext)
    const [placeSearch,updatePlace] = useContext(GoogleContext)
    const coord = useGeoLocation()

    console.log(lat, lon)
 
    useEffect(() => {
        
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat === '' ? '2' : lat}&lon=${lon === '' ? '2' : lon}&units=${unit}&appid=${API_KEY.key10}&lang=es}`)

        .then(r => r.json())
        .then(d => {
            updatePlace('restaurant')
            updateCity([d])
            updateSearchCity([d])
            console.log(d)
        })
        
        
    },[unit,lat,lon])


    
    return {cityOne,lng, updateCity}

}

