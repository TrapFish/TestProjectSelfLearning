import React from 'react';

const ChildComponent = React.memo(() => {
    console.log('Child Component Rendered');
    return (
        <div>
            <h1>Hello from ChildComponent</h1>
        </div>
    );
});

export default ChildComponent;