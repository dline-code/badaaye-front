import { APP_KEY } from '../../constants/appKey';
import { setStorageItem } from '.';

describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  it('should add the item to localStorage', () => {
    setStorageItem('TEST', ['1', '2']);

    expect(window.localStorage.getItem(`${APP_KEY}_TEST`)).toStrictEqual(
      JSON.stringify(['1', '2'])
    );
  });
});
