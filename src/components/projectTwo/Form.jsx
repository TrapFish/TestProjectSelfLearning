import React, { useState } from 'react';
import classes from './Form.module.css';

const Form = () => {
    const [inputValue, setInputValue] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const {name , value} = event.target;
        setInputValue((prevInputValue) => {
            return {...prevInputValue, [name]: value};
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        // Add your form submission logic here
        setTimeout(() => {
            setInputValue({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            });
        }, 2000)
    };

    const firstNameNotValid = submitted && inputValue.firstName.trim().length === 0;
    const lastNameNotValid = submitted && inputValue.lastName.trim().length === 0;
    const emailNotValid = submitted && !inputValue.email.includes('@');
    const passwordNotValid = submitted && inputValue.password.trim().length < 6;

    console.log('Form submitted with value:', inputValue,submitted, firstNameNotValid, lastNameNotValid, emailNotValid, passwordNotValid);
    
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
                {firstNameNotValid && <p className={classes.errorInForm}>First Name is required</p>}
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
                {lastNameNotValid && <p className={classes.errorInForm}>Last Name is required</p>}
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
                {emailNotValid && <p className={classes.errorInForm}>Email is Invalid</p>}
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
                   {passwordNotValid && <p className={classes.errorInForm}>Password is not valid</p>}
                </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;