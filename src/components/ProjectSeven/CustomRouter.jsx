import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';

const routes = {
    '/': () => <Home />,
    '/about': () => <About />,
    '/services': () => <Services />
}

function CustomRouter() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const navigate = (path) => {
        window.history.pushState({}, '', path);
        setCurrentPath(path);
    }
    const CurrentComponent = routes[currentPath] || (() => <div>404 Not Found</div>);
    return (
        <div>
            <nav>
                <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
                <a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>About</a>
                <a href="/services" onClick={(e) => { e.preventDefault(); navigate('/services'); }}>Services</a>
            </nav>
            <main>
                <CurrentComponent />
            </main>
        </div>
    )
}

export default CustomRouter;