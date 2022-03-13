
import { useState, useEffect, useContext } from "react"
import { API_KEY } from "../../config.js"
import { LatContext, LonContext } from "../../context/geocoding/coords.context.js"
import { GoogleContext } from "../../context/googleApiContext/google.context.js"
import { SearchContext } from "../../context/search.context.js"
import { IdiomContext, TemperatureContext } from "../../context/temperature.context.js"


export const useOneCity = () => {

    const [unit] = useContext(TemperatureContext)
    const [lat,updateLat] = useContext(LatContext)
    const [lon,updateLon] = useContext(LonContext)
    const [cityOne,updateCity] = useState([])
    const [city, updateSearchCity] = useContext(SearchContext)
    const [lng,updateLng] = useContext(IdiomContext)
    const [placeSearch,updatePlace] = useContext(GoogleContext)
    
    console.log(`lat ${lat} lon ${lon}`)

    console.log(city.map(e => e.coord.lon))

    useEffect(() => {

        

        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=5752baf6201822d655e5282627caa619&lang=es`)



        .then(r => r.json())
        .then(d => {
            updatePlace('restaurant')
            updateCity([d])
            updateSearchCity([d])
            console.log(d)
        })
        
        
    },[unit,lat])


    
    return {cityOne,lng, updateCity}

}

