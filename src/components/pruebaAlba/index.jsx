import { useActualWeather } from "../../custom-hooks/hook-actualWeather"


function PruebaAlba(){

    const alba = useActualWeather()
    console.log(alba)


    return(
        <h1>Hola</h1>
    )
}

export default PruebaAlba