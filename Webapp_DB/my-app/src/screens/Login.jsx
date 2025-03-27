import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Login.module.css'; // Ensure this path is correct

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic validation 
    if (email && password) {
      // Navigate to home page on successful login
      navigate('/home');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginWrapper}>
        <div className={styles.logo}>
          <svg viewBox="0 0 1134 340" className={styles.spotifyLogo}>
            <path 
              fill="currentColor" 
              d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-14 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-15-10-24 59-37 157-44 220-14 16 8 0 29-17 22-54-24-144-17-193 16zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 52 0 84-29 84-75 0-35-25-57-70-57h-28v45c0 2-1 3-3 3h-22c-2 0-3-1-3-3v-118c0-2 1-3 3-3h53c42 0 67 23 67 60 0 38-25 62-75 62zm10-86h-27c-2 0-3 1-3 3v50c0 2 1 3 3 3h27c30 0 48-12 48-28 0-17-18-28-48-28zm117 134c-13 0-24-5-34-15l-1 1v12c0 2-1 3-3 3h-22c-2 0-3-1-3-3v-168c0-2 1-3 3-3h22c2 0 3 1 3 3v76l1 1c10-10 21-15 34-15 41 0 70 31 70 75s-29 75-70 75zm-1-116c-19 0-34 15-34 41s15 41 34 41 34-15 34-41-15-41-34-41zm192 55v-5c0-35-25-57-70-57h-28v45c0 2-1 3-3 3h-22c-2 0-3-1-3-3v-118c0-2 1-3 3-3h53c42 0 67 23 67 60 0 21-10 38-28 48l31 53c1 1 0 3-2 3h-25c-1 0-2-1-3-2l-25-45c-1-2-2-2-4-2h-15c-2 0-3 1-3 3v42c0 2-1 3-3 3h-22c-2 0-3-1-3-3v-118c0-2 1-3 3-3h53c30 0 48 12 48 28 0 17-18 28-48 28zm-89-86h-27c-2 0-3 1-3 3v50c0 2 1 3 3 3h27c30 0 48-12 48-28 0-17-18-28-48-28z"
            />
          </svg>
        </div>
        <form onSubmit={handleLogin} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className={styles.inputField}
            />
          </div>
          <div className={styles.forgotPassword}>
            <a href="#" className={styles.forgotLink}>Forgot your password?</a>
          </div>
          <button type="submit" className={styles.loginButton}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;