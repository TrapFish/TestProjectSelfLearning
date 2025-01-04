import React, { useState } from 'react';

const Form = () => {
    const [inputValue, setInputValue] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });


    const handleChange = (event) => {
        const {name , value} = event.target;
        setInputValue((prevInputValue) => {
            return {...prevInputValue, [name]: value};
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted with value:', inputValue);
        // Add your form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="input">First Name:</label>
                <input
                    type="text"
                    id="input"
                    name="firstName"
                    value={inputValue.firstName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="input">Last Name:</label>
                <input
                    type="text"
                    id="input"
                    name="lastName"
                    value={inputValue.lastName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="input">Email:</label>
                <input
                    type="text"
                    id="input"
                    name="email"
                    value={inputValue.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="input">Password:</label>
                <input
                    type="password"
                    id="input"
                    name="password"
                    value={inputValue.password}
                    onChange={handleChange}
                />
                </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;