import { useState } from "react";
import { LatContext, LonContext } from "./coords.context";

const latLoc = localStorage.getItem('lat')
const lonLoc = localStorage.getItem('lon')

function CoordsProvider({children}){

    const lat  = useState(latLoc)
    const long = useState(lonLoc)



    return(
        <LatContext.Provider value={lat}>
            <LonContext.Provider value={long}>
                {children}
            </LonContext.Provider>
        </LatContext.Provider>
    )
}

export default CoordsProvider