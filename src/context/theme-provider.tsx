import React, { FC, useState } from "react";
import { ReactNode } from "react";

interface ThemeContext{
    theme: string;
    setTheme: (theme: string) => void;
}

const ThemeContext = React.createContext<ThemeContext | null>(null);

interface ThemeProviderProps {
    children: ReactNode;
}
const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
    const [theme,setTheme] = useState('light')

    return (<ThemeContext.Provider value={{theme,setTheme}}>
        {children}
    </ThemeContext.Provider>
    )
}

export {ThemeContext,ThemeProvider}