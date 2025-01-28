import React from 'react';

export const ThemeContext = React.createContext();

export function ThemeContextProvider({children}){
    const [theme, setTheme] = React.useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme)=>{
            return prevTheme === 'light' ? 'dark' : 'light';
        });
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}