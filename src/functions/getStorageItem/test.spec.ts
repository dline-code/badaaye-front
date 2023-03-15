import { APP_KEY } from '../../constants/appKey';
import { getStorageItem } from '.';

describe('getStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  it('should return the item from localStorage', () => {
    window.localStorage.setItem(`${APP_KEY}_TEST`, JSON.stringify(['test']));

    expect(getStorageItem('TEST')).toStrictEqual(['test']);
  });
});
