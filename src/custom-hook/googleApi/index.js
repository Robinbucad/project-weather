import { useContext, useEffect, useState } from "react"
import { LatContext, LonContext } from "../../context/geocoding/coords.context"
import { GoogleContext } from "../../context/googleApiContext/google.context"
import { SearchContext } from "../../context/search.context"
import { API_KEY } from '../../config.js'

const latLocal = localStorage.getItem('lat')
const lonLocal = localStorage.getItem('lon')
export const usePlaces = e => {

    const [place, updatePlace] = useState([])
    const [cityContext, setCitycontext] = useContext(SearchContext)
    const [lat] = useContext(LatContext)
    const [lon] = useContext(LonContext)

    const [restaurant, updateRestaurant] = useState([])
    const [placeSearch, updatePlaceSearch] = useContext(GoogleContext)
    console.log(placeSearch)

    useEffect(() => {
       fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=1500&type=${placeSearch}&key=`)
            .then(r => r.json())
            .then(d => {
                console.log(d)
                updateRestaurant([d])
            })
    },[cityContext,placeSearch])

    return {place, restaurant}
}


//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=1500&type=${placeSearch}&key=AIzaSyDU_rTJMBQ3rp8BRMiqFb9_sgd4AsxOJ-E}