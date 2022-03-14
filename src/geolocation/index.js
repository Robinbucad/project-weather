import  {useContext, useEffect, useState} from 'react'
import { CoordContext, LatContext, LonContext } from '../context/geocoding/coords.context'
import { GoogleContext } from '../context/googleApiContext/google.context'
import { SearchContext } from '../context/search.context'

const latLoc = localStorage.getItem('lat')
const lonLoc = localStorage.getItem('lon')

export const useGeoLocation = () => {

   // const [lat, updateLat] = useState(latLoc)
   // const [long, updateLon] = useState(lonLoc)
    const [lat, updatelat, lon, updateLon ] = useContext(CoordContext)


useEffect(() => {
    navigator.geolocation.getCurrentPosition((function (position) {
        localStorage.setItem('lat', position.coords.latitude)
        localStorage.setItem('lon', position.coords.longitude)
        updatelat(position.coords.latitude)
        updateLon(position.coords.longitude)
    
        }
    ))
},[])



}