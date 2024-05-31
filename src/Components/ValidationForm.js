import React, { useState, useEffect } from 'react';
import './ValidationForm.css';
import Footer from './Footer';

const ValidationForm = () => {
  const [input, setInput] = useState('');
  const [inputError, setInputError] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [input]);

  const validateInput = () => {
    const isPhoneNumber = /^[0-9]{10}$/.test(input);
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
    setInputError(!(isPhoneNumber || isEmail));
  };

  const validateForm = () => {
    const isPhoneNumber = /^[0-9]{10}$/.test(input);
    const isEmail = /^[^\s@]+\@[^\s@]+\.[^\s@]+$/.test(input);
    setIsFormValid(isPhoneNumber || isEmail);
  };

  const handleSubmit = () => {
    if (isFormValid) {
      alert('All good!');
      setInput('');
      setIsFormValid(false);
    }
  };

  return (
    <div className="card">
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Login to Dashboard</h2>
        <div className="form-group">
          <label htmlFor="inputField">Email or Mobile Number</label>
          <input
            type="text"
            id="inputField"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onBlur={validateInput}
          />
          {inputError && <small className="error">Please enter a valid email or 10-digit phone number.</small>}
        </div>
        <button type="button" disabled={!isFormValid} onClick={handleSubmit}>
          Next
        </button>
        <div className="divider">or</div>
        <button type="button" className="google-button">
          <img src="google-logo.png" alt="Google logo" className="google-logo" /> Sign in with Google
        </button>
      </form>
      <Footer/>
    </div>
  );
};

export default ValidationForm;
