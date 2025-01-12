import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Redux/Action'

export default function CounterWithRedux() {
    const count = useSelector(state => state.countShown); 
    const dispatch = useDispatch();
    return (
        <>
            <h1>Counter Logic Handle by Redux</h1>
            <div>
                <h2>Count Value in Redux :: {count}</h2>
                <button onClick={()=>{dispatch(increment())}}>Increase</button>
                <button onClick={()=>{dispatch(decrement())}}>Decrease</button>
            </div>
        </>
    )
}