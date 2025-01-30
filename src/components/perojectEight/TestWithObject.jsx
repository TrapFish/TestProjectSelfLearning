import React, {useState} from 'react';

const TestWithObject = () => {
    const [fruits, setFruits] = useState([
        {id: 1, name: 'Apple'},
        {id: 2, name: 'Banana'},
        {id: 3, name: 'Cherry'},
        {id: 4, name: 'Date'},
        {id: 5, name: 'Elderberry'},
        {id: 6, name: 'Fig'},
        {id: 7, name: 'Grape'},
        {id: 8, name: 'Honeydew'},
        {id: 9, name: 'Imbe'},
        {id: 10, name: 'Jackfruit'}
    ]);

    const [newFruit, setNewFruit] = useState('');

    const person = {
        name: 'John Doe',
        age: 30,
        job: 'Developer'
    };

    const handleInputNewFruit = (e) => {
        setNewFruit(e.target.value);
    }
    
    const handleNewUpdate = () => {
        console.log(newFruit);
        setFruits((prev) => {
            return [...prev, {id: prev.length + 1, name: newFruit}];
        });
        setNewFruit('');
    }
    return (
        <div>
            <h1>Person Information</h1>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <p>Job: {person.job}</p>
       
            <>
              <div>
                <input type="text" value={newFruit} onChange={handleInputNewFruit}/>
                <button onClick={handleNewUpdate}>Add To List</button>
              </div>
            </>
            <>
              {fruits?.map((fruit, index)=>{
                    return (
                        <div key={index}>
                            <p>{fruit?.id} - {fruit?.name}</p>
                        </div>
                    )
              })}
            </>
        </div>
    );
};

export default TestWithObject;