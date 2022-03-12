import  {useContext, useState} from 'react'
import { GoogleContext } from '../context/googleApiContext/google.context'

const latLoc = localStorage.getItem('lat')
const lonLoc = localStorage.getItem('lon')

export const useGeoLocation = () => {

    const [lat, updateLat] = useState(latLoc)
    const [long, updateLon] = useState(lonLoc)


   navigator.geolocation.getCurrentPosition((function (position) {
    updateLat(position.coords.latitude)
    updateLon(position.coords.longitude)

    localStorage.setItem('lat', position.coords.latitude)
    localStorage.setItem('lon', position.coords.longitude)
    }
))

return {lat,long, updateLat, updateLon}

}