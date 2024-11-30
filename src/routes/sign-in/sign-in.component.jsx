import React, { useState } from 'react'

import './sign-in.styles.css';

const SignIn = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const onButtonClick = () => {
    setEmailError('')
    setPasswordError('')

    if ('' === email) {
      setEmailError('Please enter your email')
      return
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }

    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }

    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return
    }
  }

  return (
    <div className="main-container">
      <div className="title-container">
        <div>Salesbuddy</div>
      </div>
      <br />
      <div className="input-container">
        <input 
          value={email}
          placeholder="Email"
          onChange={(ev) => setEmail(ev.target.value)}
          className="input-box"
        />
        <label className="error-label">{emailError}</label>
      </div>
      <br />
      <div className="input-container">
        <input 
        value={password}
        placeholder="Password"
        onChange={(ev) => setPassword(ev.target.value)}
        className="input-box"
        />
        <label className="error-label">{passwordError}</label>
      </div>
      <br />
      <div className="input-container">
        <input className="input-button"
          type="button"
          onClick={onButtonClick}
          value={'Log in'}
        />    
      </div>
    </div>
  );
};

export default SignIn;