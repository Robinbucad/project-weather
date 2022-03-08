import { LonContext } from "./lon.context"
import { useState } from "react"

const getLon = localStorage.getItem('lon') || []

function LonProvider({children}){

    const [lon, updateLon] = useState(getLon)

    return(
        <LonContext.Provider value={lon}>
            {children}
        </LonContext.Provider>
    )
}

export default LonProvider