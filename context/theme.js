import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeState = ({ children }) => {

    const [isDark, setIsDark] = useState(false);

    return (
        <ThemeContext.Provider value={{
            isDark,
            setIsDark,
        }}>
            { children }
        </ThemeContext.Provider>
    );
};
