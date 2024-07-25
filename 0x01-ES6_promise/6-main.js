import handleProfileSignup from './6-final-user.js';

handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg")
  .then(result => console.log(result))
  .catch(error => console.error('Error:', error));
