const bcrypt = require('bcrypt');

const password = '1111';

bcrypt.hash(password, 10).then((hash) => {
  console.log('Hash:', hash);
});