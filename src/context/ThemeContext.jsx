// ThemeContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext(); // Named export

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        color: 'blue', // Default color
        layout: 'vertical',
        container: 'full',
        sidebar: 'full',
        card: 'border',
        borderRadius: 10
    });

    // Load saved theme options from localStorage
    useEffect(() => {
        const savedTheme = JSON.parse(localStorage.getItem('appTheme'));
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    // Save theme options to localStorage when they change
    useEffect(() => {
        localStorage.setItem('appTheme', JSON.stringify(theme));
    }, [theme]);

    const handleThemeChange = (option, value) => {
        setTheme((prevTheme) => ({
            ...prevTheme,
            [option]: value
        }));
    };

    return (
        <ThemeContext.Provider value={{ theme, handleThemeChange }}>
            {children}
        </ThemeContext.Provider>
    );
};
