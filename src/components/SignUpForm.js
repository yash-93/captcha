import React, { useState } from 'react';

import styles from '../styles/SignUpForm.module.css';

const initialValues = {
  'username': '',
  'email': '',
  'password': ''
}

export default function SignUpForm() {

  const [values, setValues] = useState(initialValues);

  return (
    <form className={styles.formContainer}>
      <input
        className={styles.formInputElement}
        type='text'
        placeholder='Username'
      />
      <input
        className={styles.formInputElement}
        type='email'
        placeholder='Email'
      />
      <input
        className={styles.formInputElement}
        type='password'
        placeholder='Password'
      />
      <div className={styles.captchaBox}>
        <label
          className={styles.captcha}
        >
          123456
        </label>
      </div>
      <input
        className={styles.formInputElement}
        type='text'
        placeholder='Captcha'
      />
      <input
        className={styles.signUpBtn}
        type='submit'
        value='Sign Up'
      />
    </form>
  )
}
