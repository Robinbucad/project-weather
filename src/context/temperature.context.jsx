import { useState } from "react";
import { TemperatureContext } from "./temperature.context";

function TemperatureProvider({children}){

const temperatureState = useState('metric');


return(
<TemperatureContext.Provider value={temperatureState}>
    {children}
    
    </TemperatureContext.Provider>
)


}

export default TemperatureProvider