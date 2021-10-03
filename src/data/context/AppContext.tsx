import { createContext, useState } from "react";

// Define data type Theme
type Theme = 'dark' | ''

// Define Context Inteface
interface AppContextProps {
    theme?: Theme
    toggleTheme?: () => void
}

// Create Context
const AppContext = createContext<AppContextProps>({})

// Create Context Provider that will provide context data
export function AppProvider(props) {

    // Create Theme State
    const [theme, setTheme] = useState<Theme>('')

    function toggleTheme() {
        setTheme(theme == '' ? 'dark' : '')
    }

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