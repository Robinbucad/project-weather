import { useEffect, useState } from "react"
import { useSearchWeather } from "../../custom-hooks/hook-search"
import { FilterContext } from "./filter.context"

const getLat = localStorage.getItem('lat') || []


function FilterProvider({children}){

    const [lat, updateLan] = useState(getLat)
    

    navigator.geolocation.getCurrentPosition((function(position){
        localStorage.setItem('lat', position.coords.latitude)
        localStorage.setItem('lon', position.coords.longitude)
       }))

    

    return(
        <FilterContext.Provider value={lat} >
            {children}
        </FilterContext.Provider>
    )
}

export default FilterProvider