// React Hooks
import { createContext, useState } from "react";

// Data
import CountryData from "../static-data/CountryData";

type CountryType = {
    id: string,
    flag: string,
    name: string,
    code: string
}

type CountryContextType = {
    country: CountryType,
    setCountry: React.Dispatch<React.SetStateAction<{
    id: string;
    flag: string;
    name: string;
    code: string;
}>>
}

type ContryContextApiProps = {
    children: React.ReactNode
}


export const CountryContext = createContext<CountryContextType| null>(null);


const ContryContextApi = ({children}: ContryContextApiProps) => {

    const [country, setCountry] = useState({id: CountryData[0].id, flag: CountryData[0].flag, name: CountryData[0].name, code: CountryData[0].code});


    return(
        <CountryContext.Provider value={{country, setCountry}}>
            {children}
        </CountryContext.Provider>
    )
}

export default ContryContextApi;