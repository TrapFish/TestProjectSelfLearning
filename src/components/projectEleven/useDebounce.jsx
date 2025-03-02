import React, { useState, useEffect, useRef } from 'react';

export default function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);
    const timer = useRef(null);
    useEffect(() => {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(timer.current);
        }
    }, [value, delay]);

    return debounceValue;
}