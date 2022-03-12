import { useState } from "react";
import { SearchContext } from "./search.context";



function SearchProvider({ children }) {

    const city = useState([])
    
    return (
        <SearchContext.Provider value={city}>
            
                {children}
           
        </SearchContext.Provider>
    )
}

export default SearchProvider