import { useState } from "react";

import { TemperatureContext, IdiomContext } from "./temperature.context";

function TemperatureProvider({ children }) {

    const temperatureState = useState('metric');
    const idiomState = useState('es')
    

    return (
        <TemperatureContext.Provider value={temperatureState}>
            <IdiomContext.Provider value={idiomState}>
                {children}
            </IdiomContext.Provider>
        </TemperatureContext.Provider>
    )


}

export default TemperatureProvider