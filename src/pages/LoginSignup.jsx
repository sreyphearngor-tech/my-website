

import React, { useState } from 'react'
import './CSS/Loginsignup.css'

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true) // true = Login, false = Sign Up
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('') // Only for Sign Up

  const handleSubmit = () => {
  if (isLogin) {
    alert(`Login Successful!`);
  } else {
    alert(`Sign Up Successful!`);
     setTimeout(() => onClose(), 3000); 

  }

  setEmail('');
  setPassword('');
  setName('');
};

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>

        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        <div className="loginsignup-fields">
          {!isLogin && (
            <input
              type='text'
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSubmit}>{isLogin ? "Login" : "Continue"}</button>

        <p className='loginsignup-login'>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={() => setIsLogin(!isLogin)} style={{cursor:"pointer", color:"#007bff"}}>
            {isLogin ? "Sign Up here" : "Login here"}
          </span>
        </p>

        {!isLogin && (
          <div className="loginsignup-agree">
            <input type='checkbox' />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default LoginSignup;
