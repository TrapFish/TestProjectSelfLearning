import React, {useContext} from 'react';
import {ThemeContext} from './Context/ThemeContext';

function ChildComponent (){
    const {theme, toggleTheme} =  useContext(ThemeContext);
    return (
        <div>
            <h1>Child Component</h1>
            {theme}

            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}   

export default ChildComponent;