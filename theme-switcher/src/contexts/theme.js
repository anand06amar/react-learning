import { createContext, useContext } from "react"

 export const ThemeContext = createContext({
    ThemeMode: "Light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
})

export const ThemeContextProvider = ThemeContext.Provider

export default function Theme (){
    return useContext(ThemeContext)

    

}
