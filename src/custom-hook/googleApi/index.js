import { useContext, useEffect, useState } from "react"
import { SearchContext } from "../../context/search.context"

export const usePlaces = e => {

    const [place, updatePlace] = useState([])
    const [cityContext, setCitycontext] = useContext(SearchContext)
    const [lat, updatelat] = useState([])
    const [lon,updateLon] = useState([])
    const [restaurant, updateRestaurant] = useState([])



    useEffect(() => {
       fetch('')
            .then(r => r.json())
            .then(d => {
          
                updatelat(cityContext.map(e => e.coord.lat))
                updateLon(cityContext.map(e => e.coord.lon))
                updateRestaurant([d])
            })
    },[])

    return {place, restaurant}
}