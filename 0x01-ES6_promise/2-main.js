import handleResponseFromAPI from './2-then.js';

const promise = Promise.resolve();
handleResponseFromAPI(promise);

const failingPromise = Promise.reject();
handleResponseFromAPI(failingPromise);
