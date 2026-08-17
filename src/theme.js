const STORAGE_KEY = 'theme';

const listeners = new Set();

const readStored = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark';
  } catch (e) {
    return 'dark';
  }
};

let theme = document.documentElement.getAttribute('data-theme') || readStored();

export const getTheme = () => theme;

export const subscribe = (listener) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

export const setTheme = (next) => {
  if (next === theme) return;

  theme = next;
  document.documentElement.setAttribute('data-theme', next);

  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch (e) {
  }

  listeners.forEach((listener) => listener());
};
