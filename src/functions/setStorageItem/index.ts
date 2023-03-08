import { APP_KEY } from '../../constants/appKey';

export function setStorageItem<T extends object>(key: string, value: T) {
  const data = JSON.stringify(value);

  return window.localStorage.setItem(`${APP_KEY}_${key}`, data);
}
