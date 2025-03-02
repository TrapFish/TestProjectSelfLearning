import React, { useState } from "react";
import validator from "validator";

export default function ProfileCom() {
  const [formField, setFormField]  =  useState({
    name: "",
    age: 0,
    email: "",
  });

  const [formError, setFormError] = useState("");
  
  const handleForm = (e) => {
    setFormField({...formField, [e.target.name]: e.target.value})
  }

  const validateForm = (formField) => {
    if(formField.name === "" || formField.age === 0 || formField.email === "") {
      return "Please fill all the fields";
    } else if(formField.age < 18){
      return "Age should be greater than 18";
    } else if(!validator.isEmail(formField.email)){
      return "Eamil is not valid";
    } else {
      return "";
    }
  }

  const storeUserData = (formField) => {
    localStorage.setItem("userProfile", JSON.stringify(formField));
    return "";
  }

  const handleProfileAddition = () => { 
      console.log(formField);
      const error = validateForm(formField);
      error ? setFormError(error) : setFormError("");
      storeUserData(formField);
      setFormField({
        name: "",
        age: 0,
        email: "",
      });
  }

  return (
    <>
      <h1>Profile</h1>
      <div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formField.name}
            onChange={handleForm} />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formField.age}
            onChange={handleForm} />
        </div>
        <div>
          <label>Gmail</label>
          <input
            type="text"
            name="email"
            value={formField.email}
            onChange={handleForm} />
        </div>
        
        <div><button onClick={handleProfileAddition}>Add Profile</button></div>
      </div>
      <div>
        {formError && <div>{formError}</div>}
      </div>
    </>
  );
}