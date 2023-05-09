import { createContext, useContext, useState } from 'react';

const themeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [themeColor, setThemeColor] = useState('white');

    return <themeContext.Provider value={[themeColor, setThemeColor]}>{children}</themeContext.Provider>;
};

export const useThemeContext = () => {
    return useContext(themeContext);
};
