import { createContext, useState } from "react";

export const DataContext = createContext({})

export const DataProvider = ({ children }) => {

    const [counter, setCounter] = useState(0)
    const [error, setError] = useState(false)

    return (
        <DataContext.Provider value={{counter, setCounter, error, setError}} >
            {children}
        </DataContext.Provider>
    )
}

export default DataContext