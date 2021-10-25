import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeState = ({ children }) => {

    const [isDark, setIsDark] = useState(false);

    const switchTheme = () => setIsDark(!isDark);

    return (
        <ThemeContext.Provider value={{
            isDark,
            setIsDark,
            switchTheme,
        }}>
            { children }
        </ThemeContext.Provider>
    );
};
