const STORAGE_KEY = 'theme';

const listeners = new Set();

const readStored = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark';
  } catch (e) {
    return 'dark';
  }
};

// Атрибут уже проставлен инлайн-скриптом в index.html до первой отрисовки,
// так что здесь он и есть источник правды.
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
    // приватный режим — тема просто не переживёт перезагрузку
  }

  listeners.forEach((listener) => listener());
};
