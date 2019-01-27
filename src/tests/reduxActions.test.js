import moxios from 'moxios';
import {storeFactory} from '../../test/testUtils';
import {getSecretWord} from '../actions';


describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const secretWord = 'party';

  test('Adds response word to state', () => {
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    return store.dispatch(getSecretWord())
      .then(() => {
        expect(store.getState().secretWord).toEqual(secretWord)
      });
  });
});
