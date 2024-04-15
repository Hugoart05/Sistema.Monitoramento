import { createContext, useContext, useEffect, useState } from "react";
import { ReactTypeChild } from "../../Types/React";
import { AuthContextType} from "../../Types/AuthContextTypes";
import { AuthContext } from "../AuthContext/AuthProvider";

interface ThemeProviderType {
    togglerTheme: () => void
}

export const ThemeContext = createContext<ThemeProviderType | undefined>(undefined)

export const ThemeProvider = ({children}:ReactTypeChild) => {
    const authData = useContext<AuthContextType | undefined>(AuthContext)
    const [theme, setTheme] = useState<string | undefined>(authData?.authData?.theme)
    // verifica na primeira vez que renderiza qual tema deve usar
    useEffect(() => {
        function setCurrentTheme() {
            const storageTheme: string | null = localStorage.getItem('@theme')
            if (!storageTheme) {
                localStorage.setItem('@theme', 'light')
                setTheme('light')
                return
            } else {
                setTheme(storageTheme)
            }
        }
        setCurrentTheme()
    }, [])

    //muda o tema de acordo com a dependencia -theme- 
    useEffect(() => {
        document.body.classList.remove('light', 'dark');
        if(theme == undefined)
            document.body.classList.add('light');
        else
            document.body.classList.add(theme)

    }, [theme])

    function togglerTheme(): void {
        let newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('@theme', newTheme)
    }

    return (
        <ThemeContext.Provider value={{ togglerTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}