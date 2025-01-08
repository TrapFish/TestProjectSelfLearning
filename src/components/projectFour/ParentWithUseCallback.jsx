import React, { useState, useCallback  } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     setCount(count + 1);
//   }, [count]); // Dependency array includes 'count'

const handleClick = useCallback(()=>{
    setCount(count + 1);
}, [count])

//   const handleClick = useMemo(() => {
//     return () => {
//       setCount(count + 1);
//     };
//   }, [count]); 
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <ChildMemo count = {count}/> 
    </div>
  );
}

function ChildComponent({count}) {
  console.log('ChildComponent re-rendered'); 
  return (
    <div>
      {/* ChildComponent content */}
      {count}
    </div>
  );
}

const ChildMemo = React.memo(ChildComponent);

export default ParentComponent;