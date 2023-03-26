import React from 'react';
import SignUpForm from '../components/SignUpForm';

import styles from '../styles/Captcha.module.css';

export default function Captcha() {
  return (
    <div className={styles.captchaContainer}>
      <SignUpForm />
    </div>
  )
}
