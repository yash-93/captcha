import { useState } from 'react';

import { ThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Captcha from './pages/Captcha';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const changeTheme = (theme) => {
    setIsDarkMode(theme);
  }
  return (
    <ThemeContext.Provider value={{ isDarkMode, changeTheme }}>
      <div>
        <Navbar />
        <Captcha />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
