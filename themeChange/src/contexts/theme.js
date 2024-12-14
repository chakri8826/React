import { useContext,createContext } from "react";

const ThemeContext = createContext({
    ThemeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider = ThemeContext.Provider

export function useTheme(){
    return useContext(ThemeContext)
}
