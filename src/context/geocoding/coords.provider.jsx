import { useState } from "react";
import { CoordContext} from "./coords.context.js";

const latLoc = localStorage.getItem('lat')
const lonLoc = localStorage.getItem('lon')

function CoordsProvider({children}){

    const [lat, updatelat] = useState(latLoc)
    const [lon, updateLon] = useState(lonLoc)


    return(
        <CoordContext.Provider value= {[lat, updatelat, lon, updateLon ]} >
      
                {children}
       
        </CoordContext.Provider>
    )
}

export default CoordsProvider