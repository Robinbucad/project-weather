import  {useContext, useState} from 'react'
import { LatContext, LonContext } from '../context/geocoding/coords.context'
import { GoogleContext } from '../context/googleApiContext/google.context'

const latLoc = localStorage.getItem('lat')
const lonLoc = localStorage.getItem('lon')

export const useGeoLocation = () => {

    const [lat, updateLat] = useState(latLoc)
    const [long, updateLon] = useState(lonLoc)
    const [latCon,updateLatCont] = useContext(LatContext)
    const [lonCont, updateLonCont] = useContext(LonContext)

    console.log(latCon)
    console.log(lonCont)
   navigator.geolocation.getCurrentPosition((function (position) {

    updateLatCont(position.coords.latitude)
    updateLonCont(position.coords.longitude)
    localStorage.setItem('lat', position.coords.latitude)
    localStorage.setItem('lon', position.coords.longitude)
    }
))

return {lat,long, updateLat, updateLon}

}