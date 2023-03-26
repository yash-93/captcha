import { useContext } from 'react';
import SignUpForm from '../components/SignUpForm';

import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/Captcha.module.css';

export default function Captcha() {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={themeContext.isDarkMode ? styles.captchaContainerDark : styles.captchaContainerLight}>
      <SignUpForm />
    </div>
  )
}
