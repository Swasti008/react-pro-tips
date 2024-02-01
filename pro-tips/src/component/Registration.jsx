import { useState } from 'react';
import '../App.css';

function Registration() {
  const initialValues = { firstname: "", lastname: "", email: "", phoneNumber: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const [isSuccess,setSuccess]= useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formValues);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);
      setSubmit(true);
    }
  };

  const validate = (values) => {
    const err = {};
    if (!values.firstname) {
      err.firstname = "Firstname is required";
    }
    if (!values.lastname) {
      err.lastname = "Lastname is required";
    }
    if (!values.email) {
      err.email = "Email is required";
    }
    if (!values.phoneNumber) {
      err.phoneNumber = "Phone Number is required";
    }
    else if(values.phoneNumber.length !==10){
      err.phoneNumber = "Please enter a valid phone number";
    }
    return err; 
  };

  return (
    <div className='container'>
      <form className='sign-up form' onSubmit={handleSubmit}>
        {isSuccess?<h1 className='green'>Registration successfull !</h1>:<h1>Sign Up Form</h1>}
        <div className='form-section'>
          <div className='field'>
            <label>First Name</label>
            <input type="text" name="firstname" placeholder='Firstname' value={formValues.firstname} onChange={handleChange} />
            {errors.firstname && <p>{errors.firstname}</p>}
          </div>
          <div className='field'>
            <label>Last Name</label>
            <input type="text" name="lastname" placeholder='Lastname' value={formValues.lastname} onChange={handleChange} />
            {errors.lastname && <p>{errors.lastname}</p>}
          </div>
          <div className='field'>
            <label>Email</label>
            <input type="email" name="email" placeholder='Email' value={formValues.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className='field'>
            <label>Phone Number</label>
            <input type="number" name="phoneNumber" placeholder='10-digit Phone Number' value={formValues.phoneNumber} onChange={handleChange} />
            {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
          </div>
          <button className='submit-button' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
