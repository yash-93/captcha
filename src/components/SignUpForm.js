import React, { useEffect, useState } from 'react';

import { generateCaptcha, checkFieldValidity } from '../utils';
import styles from '../styles/SignUpForm.module.css';

const initialValues = {
  'username': '',
  'email': '',
  'password': '',
  'captcha': ''
}

export default function SignUpForm() {

  const [values, setValues] = useState(initialValues);
  const [captcha, setCaptcha] = useState(null);
  const [errors, setErrors] = useState(null);
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleChange = (e) => {
    setIsSignUpSuccess(null);
    setErrors(null);
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(null);
    setIsSignUpSuccess(null);
    const err = checkFieldValidity(values, captcha);
    if (err.length) {
      setCaptcha(generateCaptcha());
      setErrors(err);
      return;
    }
    setIsSignUpSuccess(true);
    setValues(initialValues);
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit} noValidate>
      <input
        className={styles.formInputElement}
        type='text'
        placeholder='Username'
        value={values.username}
        name='username'
        onChange={handleChange}
      />
      <input
        className={styles.formInputElement}
        type='email'
        placeholder='Email'
        value={values.email}
        name='email'
        onChange={handleChange}
      />
      <input
        className={styles.formInputElement}
        type='password'
        placeholder='Password'
        value={values.password}
        name='password'
        onChange={handleChange}
      />
      <div className={styles.captchaBox}>
        <div style={{ width: 'fitContent', backgroundColor: 'white', padding: '0.25rem 1rem' }}>
          <label
            className={styles.captcha}
          >
            {captcha}
          </label>
        </div>
      </div>
      <input
        className={styles.formInputElement}
        type='text'
        placeholder='Captcha'
        value={values.captcha}
        name='captcha'
        onChange={handleChange}
      />
      {
        errors &&
        errors.map((error, index) => {
          return <label className={styles.errorLabel} key={index}>{error}</label>
        })
      }
      <input
        className={styles.signUpBtn}
        type='submit'
        value='Sign Up'
      />
      {
        isSignUpSuccess && <label className={styles.successLabel}>Sign Up successful</label>
      }
    </form>
  )
}
