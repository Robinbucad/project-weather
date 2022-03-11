import { useContext, useEffect, useState } from "react"
import { SearchContext } from "../../context/search.context"
/**https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.3890815,-0.5352448&radius=1500&type=restaurant&key=AIzaSyDU_rTJMBQ3rp8BRMiqFb9_sgd4AsxOJ-E */

export const usePlaces = e => {

    const [place, updatePlace] = useState([])
    const [cityContext, setCitycontext] = useContext(SearchContext)
    const [lat, updatelat] = useState([])
    const [lon,updateLon] = useState([])
    const [restaurant, updateRestaurant] = useState([])



    useEffect(() => {
        fetch('https://maps.googleapis.com/maps/api/place/nearbysrch/json?location=38.3890815,-0.5352448&radius=1500&type=restaurant&key=AIzaSyDU_rTJMBQ3rp8BRMiqFb9_sgd4AsxOJ-E ')
            .then(r => r.json())
            .then(d => {
          
                updatelat(cityContext.map(e => e.coord.lat))
                updateLon(cityContext.map(e => e.coord.lon))
                updateRestaurant([d])
            })
    },[])

    return {place, restaurant}
}