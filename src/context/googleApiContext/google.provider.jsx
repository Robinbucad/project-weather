import { useState } from "react"
import { GoogleContext } from "./google.context"


function GoogleProvider({children}){
 

    const placeGoogle = useState('')

    return(
       <GoogleContext.Provider value={placeGoogle}>
           {children}
       </GoogleContext.Provider>
    )
}

export default GoogleProvider