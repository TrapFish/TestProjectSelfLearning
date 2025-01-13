import { useState, useEffect, useRef } from 'react';

export default function useDebounce( value , delay){
 const [searchValue, setSearchValue] = useState([]);
   const timer = useRef(null);
   useEffect(()=>{
       clearTimeout(timer.current);
       
       timer.current = setTimeout(async ()=>{
            const apiFetchData = await fetch(`https://dummyjson.com/products/search?q=${value}`);
            const dataFetch = await apiFetchData.json();
            setSearchValue(dataFetch);
       } , delay);

       return ()=>{
        clearTimeout(timer.current);
       }
   },[value, delay]);

   return searchValue;
}
