import { createContext, useEffect, useState } from "react";

// Define data type Theme
// type Theme = 'dark' | ''

// Define Context Inteface
interface AppContextProps {
    theme?: string
    toggleTheme?: () => void
}

// Create Context
const AppContext = createContext<AppContextProps>({})

// Create Context Provider that will provide context data
export function AppProvider(props) {

    // Create Theme State
    const [theme, setTheme] = useState('')

    function toggleTheme() {
        const newTheme = (theme == '' ? 'dark' : '')
        setTheme(newTheme)
        // Set new theme value in localstorage
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        setTheme(savedTheme)
    }, [])

    return (
        <AppContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

// Export Context
export default AppContext;