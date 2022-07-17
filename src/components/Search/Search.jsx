import  {AsyncPaginate} from "react-select-async-paginate";
import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "../../api";



const Search = ({onSearchChange}) => {

    const [searchInput, setSearchInput] = useState(null);
    
    
    
    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, 
             geoApiOptions)
        .then(response => response.json())
        .then(response => {
            return {
                options : response.data.map((city) => {
                    return {
                        value : `${city.latitude} ${city.longitude}`,
                        label : `${city.name},${city.countryCode}`,
                    }
                }) 
            } 
        } )
        .catch(err => console.error(err))
    }

    const handleOnChange = (searchData) => {
        setSearchInput(searchData);
        onSearchChange(searchData);
    }

    return(
        <AsyncPaginate
            placeholder ="Search for city" 
            debounceTimeout={1000}
            value = {searchInput}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search;