import React, {useState, useCallback} from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [parentState, setParentState] = useState(0);

const handleParentChnage = useCallback(() => {
    setParentState(parentState + 1);
}, [parentState]);

    return (
        <div>
            <h1>Parent Component</h1>
            <p>This is the Parent Component.</p>
            <button  onClick={handleParentChnage}>Button {parentState}</button>
            <ChildComponent />
        </div>
    );
};

export default ParentComponent;