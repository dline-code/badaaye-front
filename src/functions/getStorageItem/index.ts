import { APP_KEY } from '../../constants/appKey';

export function getStorageItem(key: string) {
  const data = window.localStorage.getItem(`${APP_KEY}_${key}`);

  return JSON.parse(data || '');
}
