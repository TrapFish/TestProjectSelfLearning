import React, {useState} from 'react';

function Test() {
    const [fruits, setFruits] = useState(['apple', 'banana', 'cherry']);
    const [newFruit, setNewFruits] = useState('');
    const addToList = () => {
        setFruits([...fruits, newFruit]);
        setNewFruits('')
    }

    const handleForm = (e) => {
       setNewFruits(e.target.value);
    }

    return (
        <div>
            <h1>Test</h1>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            <input type="text" value={newFruit} onChange={handleForm}/>
            <button onClick={addToList}>Add List</button>
        </div>
    )
}

export default Test;