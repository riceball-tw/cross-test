import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <video
            style={{ mixBlendMode: 'overlay' }}
            className="fixed top-0 left-0 -z-10 h-full w-full object-fill opacity-80"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src="global/fibonacci.webm" type="video/webm" />
            <source src="global/fibonacci.mp4" type="video/mp4" />
        </video>
    </React.StrictMode>,
);
