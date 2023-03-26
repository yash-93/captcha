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

export const COLORS = {
  light: {
    '--theme': 'light',
    '--app-bg': '#fff',
    '--brand-bg': '#166bff',
    '--brand-bg-90': '#2d7aff',
    '--brand-bg--40': 'rgba(22, 107, 255, 0.6)',

    '--brand-text': '#fff',
    '--link': '#166bff',
    '--link-active': '#0b55d5',
    '--focus': '#8b5cf6',
    '--border': '#e2e8f0',
    '--border-muted': '#EDF2F7',
    '--muted': '#5F718C',
    '--text': '#47546b',
    '--text-heading': '#2d3748',
    '--text-disabled': '#a0aec0',
    '--code': '#47546b',
    '--code-bg': '#f6f7f9',
    '--shadow': 'rgba(22, 107, 255, 0.1)',

    '--info': '#0299e7',
    '--info-bg': 'rgba(2, 153, 231, 0.1)',
    '--warning': '#d97706',
    '--warning-bg': 'rgba(217, 119, 6, 0.1)',
    '--success': '#22c55e',
    '--success-bg': 'rgba(34, 197, 94, 0.1)',
    '--danger': '#dc2626',
    '--danger-bg': 'rgba(220, 38, 38, 0.1)',
    '--danger-90': '#e03c3c',
    '--danger--40': 'rgba(220, 38, 38, 0.6)',
    '--alert-text': '#47546b',

    '--grad1-1': '#1476FF',
    '--grad1-2': '#00ABDA',
    '--grad2-1': '#12D393',
    '--grad2-2': '#10CCC5',
    '--grad3-1': '#6373F1',
    '--grad3-2': '#9884FC',
    '--grad4-1': '#f87171',
    '--grad4-2': '#F68B27',
    '--grad5-1': '#EC4899',
    '--grad5-2': '#F87171',
  },
  dark: {
    '--theme': 'dark',
    '--app-bg': '#171923',
    '--brand-bg': '#166bff',
    '--brand-bg-90': '#2d7aff',
    '--brand-bg--40': 'rgba(22, 107, 255, 0.6)',

    '--brand-text': '#fff',
    '--link': '#2997ff',
    '--link-active': '#89b3fa',
    '--focus': '#8b5cf6',
    '--border': '#2d3748',
    '--border-muted': '#212633',
    '--muted': '#a0aec0',
    '--text': '#a0aec0',
    '--text-heading': '#f7f9fc',
    '--text-disabled': '#627693',
    '--code': '#cbd5e0',
    '--code-bg': '#1f2631',
    '--shadow': 'rgba(0, 0, 0, 0.2)',

    '--info': '#0299e7',
    '--info-bg': 'rgba(2, 153, 231, 0.05)',
    '--warning': '#d97706',
    '--warning-bg': 'rgba(217, 119, 6, 0.05)',
    '--success': '#22c55e',
    '--success-bg': 'rgba(34, 197, 94, 0.05)',
    '--danger': '#dc2626',
    '--danger-bg': 'rgba(220, 38, 38, 0.05)',
    '--danger-90': '#e03c3c',
    '--danger--40': 'rgba(220, 38, 38, 0.6)',
    '--alert-text': 'rgba(247, 250, 252, 0.8)',

    '--grad1-1': '#F7F9FC',
    '--grad1-2': '#F7F9FC',
    '--grad2-1': '#F7F9FC',
    '--grad2-2': '#F7F9FC',
    '--grad3-1': '#F7F9FC',
    '--grad3-2': '#F7F9FC',
    '--grad4-1': '#F7F9FC',
    '--grad4-2': '#F7F9FC ',
    '--grad5-1': '#F7F9FC',
    '--grad5-2': '#F7F9FC',
  },
};
