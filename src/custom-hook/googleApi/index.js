import { useContext, useEffect, useState } from "react"
import { LatContext, LonContext } from "../../context/geocoding/coords.context"
import { GoogleContext } from "../../context/googleApiContext/google.context"
import { SearchContext } from "../../context/search.context"
import { API_KEY } from '../../config.js'

import valenciaSol1 from '../../assets/img/valencia/sol/valenciaSol1.svg'
import valencia2Sol from '../../assets/img/valencia/sol/valenciaSol2.svg'
import valenciaSol3 from '../../assets/img/valencia/sol/valenciaSol3.svg'
import valenciaSol4 from '../../assets/img/valencia/sol/valenciaSol4.svg'
import valenciaSol5 from '../../assets/img/valencia/sol/valenciaSol5.svg'
import valenciaSol6 from '../../assets/img/valencia/sol/valenciaSol6.svg'
import valenciaSol7 from '../../assets/img/valencia/sol/valenciaSol7.svg'
import valenciaSol8 from '../../assets/img/valencia/sol/valenciaSol8.svg'





export const usePlaces = e => {


    const images = [valenciaSol1,valencia2Sol,valenciaSol3,valenciaSol4,valenciaSol5,valenciaSol6,valenciaSol7,valenciaSol8]
    let random = Math.floor(Math.random() * images.length)
    const aleatorio = images[random]
    console.log(aleatorio)

    const [place, updatePlace] = useState([])
    const [cityContext, setCitycontext] = useContext(SearchContext)
    const [lat] = useContext(LatContext)
    const [lon] = useContext(LonContext)
    
    const [restaurant, updateRestaurant] = useState([])
    const [placeSearch, updatePlaceSearch] = useContext(GoogleContext)
    console.log(placeSearch)

    useEffect(() => {
       fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=1500&type=${placeSearch}&key=${API_KEY}`)
            .then(r => r.json())
            .then(d => {
                d.results.map(e => {
                    e.img = aleatorio
                })
                console.log(d)
                updateRestaurant([d])
            })
    },[cityContext,placeSearch])

    return {place, restaurant}
}


