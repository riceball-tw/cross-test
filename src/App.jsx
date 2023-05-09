import { BrowserRouter, useLocation } from 'react-router-dom';
import { ThemeContextProvider } from '@/context/themeContext';
import AnimatedRoutes from './components/AnimatedRoutes';

export default function App() {
    return (
        <BrowserRouter>
            <ThemeContextProvider>
                <AnimatedRoutes></AnimatedRoutes>
            </ThemeContextProvider>
        </BrowserRouter>
    );
}
