import { useState } from "react";
import { useOneCity } from "../custom-hook/oneCity";
import { SearchContext } from "./search.context";



function SearchProvider({children}){

    const city = useState([])

   
    return(
        <SearchContext.Provider value={city}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider