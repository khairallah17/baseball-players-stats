import { createContext, useState } from "react";

export const DataContext = createContext({})

export const DataProvider = ({ children }) => {

    const [counter, setCounter] = useState(0)

    console.log(counter)

    return (
        <DataContext.Provider value={{counter, setCounter}} >
            {children}
        </DataContext.Provider>
    )
}

export default DataContext