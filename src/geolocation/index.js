import  {useContext, useEffect} from 'react'
import { CoordContext } from '../context/geocoding/coords.context'



export const useGeoLocation = () => {

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