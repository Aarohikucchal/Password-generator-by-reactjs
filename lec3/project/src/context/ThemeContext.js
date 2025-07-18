import {createContext , useContext} from "react"
export const ThemeContext = createContext({
    darkTheme:true,
    setDarkTheme:()=>{},
})
export const useTheme =()=>{
    return useContext(ThemeContext);
}
export const ThemeProvider = ThemeContext.Provider;