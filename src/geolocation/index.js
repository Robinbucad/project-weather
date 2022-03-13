import  {useContext, useEffect, useState} from 'react'
import { CoordContext, LatContext, LonContext } from '../context/geocoding/coords.context'
import { GoogleContext } from '../context/googleApiContext/google.context'

const latLoc = localStorage.getItem('lat')
const lonLoc = localStorage.getItem('lon')

export const useGeoLocation = () => {

   // const [lat, updateLat] = useState(latLoc)
   // const [long, updateLon] = useState(lonLoc)
    const [lat, updatelat, lon, updateLon ] = useContext(CoordContext)


useEffect(() => {
    navigator.geolocation.getCurrentPosition((function (position) {

        localStorage.setItem('lat', position.coords.lat)
        localStorage.setItem('lon', position.coords.lon)
        updatelat(position.coords.latitude)
        updateLon(position.coords.longitude)
    
        }
    ))
},[])



}