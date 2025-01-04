import React, {useState} from 'react';

function ParentComponent() {
   const [count, setCount] = useState(0);

   const updateCount = () => {
       setCount(count + 1);
   };

   return (
   <>
     <div>
        <button onClick={updateCount}>Click {count}</button>
        {/* <ChildComponent /> */}
        <MemoizedChildComponent />
    </div>
   </>
   )
}

function ChildComponent() {
    console.log('Child Component Rendered');
    return (
         <div>
              <h1>Child Component</h1>
              <p>This is a child component.</p>
         </div>
    );
}

const MemoizedChildComponent = React.memo(ChildComponent);

const DemoComponent = () => {
    return (
        <div>
            <h1>Demo Component</h1>
            <p>This is a demo component.</p>
            <ParentComponent />
        </div>
    );
};

export default DemoComponent;