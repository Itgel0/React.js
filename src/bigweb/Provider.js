import { createContext, useState } from "react";

export const ProviderMsContext = createContext();

export function ThemeComponent ({children}) {
    const [checked, setChecked] = useState(true);
    const handleChange = () =>{};
    return(
        <ProviderMsContext.Provider value={{ handleChange, checked }}>
            {children}
        </ProviderMsContext.Provider>
    )
}