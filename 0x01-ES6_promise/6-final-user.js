import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call the functions with the provided arguments
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to handle both promises and return their results
  return Promise.allSettled([signUpPromise, uploadPromise]).then(results => {
    return results.map(result => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason
    }));
  });
}
