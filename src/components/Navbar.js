import { useContext } from 'react';
import { CgDarkMode } from 'react-icons/cg';

import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const themeContext = useContext(ThemeContext);

  const handleTheme = () => {
    themeContext.changeTheme(!themeContext.isDarkMode);
  }

  return (
    <nav className={themeContext.isDarkMode ? styles.navContainerDark : styles.navContainerLight} id='navbar'>
      <label className={themeContext.isDarkMode ? styles.brandDark : styles.brandLight}>CAPTCHA</label>
      <CgDarkMode size={20} className={themeContext.isDarkMode ? styles.darkModeIconDark : styles.darkModeIconLight} onClick={handleTheme} />
    </nav>
  )
}
