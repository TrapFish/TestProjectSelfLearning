import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Redux/Action';
import useDebounce from './hooks/useDebounce';

export default function CounterWithRedux() {
    const [findValue, setFindValue] = useState("")
    const valueAfterDebounce = useDebounce(findValue, 5000);
    const count = useSelector(state => state.countShown);
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setFindValue(e.target.value)
    }

    return (
        <>
            <h1>Counter Logic Handle by Redux</h1>
            <div>
                <h2>Count Value in Redux :: {count}</h2>
                <button onClick={() => { dispatch(increment()) }}>Increase</button>
                <button onClick={() => { dispatch(decrement()) }}>Decrease</button>
            </div>
            <form type="submit">
                <input type="text" value={findValue} onChange={handleInput} />
            </form>
            <div className="prduct-display">
            {valueAfterDebounce?.products?.map((productValue, index) => {
                return (
                    <>
                            <div key={index}>
                                <p>{productValue?.title}</p>
                                <img src={productValue?.images[0]} alt={productValue?.title} width="50px" />
                            </div>
                    </>
                )
            })}
            </div>
        </>
    )
}