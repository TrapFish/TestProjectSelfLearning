import React from 'react';
import ParentComponent from './ParentWithUseCallback';


const Demo = () => {
   
    return (
        <div>
            <h1>Demo Component</h1>
            <p>This is a functional component.</p>
            <ParentComponent />
        </div>
    );
};

export default Demo;