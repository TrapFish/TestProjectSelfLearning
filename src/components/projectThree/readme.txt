
since parent component is updating the state and in return it is rerendering the its jsx and so it is rerendeing the entire child component 
though the props from parent component is not passed to the child component 
and to avoid this we can use React.memo() to memoize the child component