export const checkFieldValidity = (values, generatedCaptcha) => {
  const keys = Object.keys(values);
  const vals = Object.values(values);
  let err = [];
  keys.forEach((key, index) => {
    switch (key) {
      case 'username':
        if (!vals[index]) {
          err.push('Username cannot be empty.');
        }
        break;
      case 'email':
        if (!vals[index]) {
          err.push('Email cannot be empty.');
        } else if (!vals[index].match(/\S+@\S+\.\S+/)) {
          err.push('Invalid email.');
        }
        break;
      case 'password':
        if (!vals[index]) {
          err.push('Password cannot be empty.');
        } else if (vals[index].length < 8) {
          err.push('Password can not be less than 8 characters.');
        }
        break;
      case 'captcha':
        if (!vals[index]) {
          err.push('Captcha cannot be empty.');
        } else if (vals[index] !== generatedCaptcha) {
          err.push('Captcha do not match');
        }
        break;
      default:
        return err;
    }
  });
  return err;
}

export const generateCaptcha = () => {
  let captcha = '';
  const allowedChars = '0791328465qwertyuioplkjhgfdsazxcvbnmZAQWSXCDERFVBGTYHNMJUIKLOP';
  for (let i = 0; i < 6; i++) {
    captcha += allowedChars[Math.floor(Math.random() * allowedChars.length)];
  }
  return captcha;
}
