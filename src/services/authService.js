const supabase = require('../config/supabase');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async ({ username, password }) => {
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('name', username) // your database column is 'name'
    .single();

  if (error || !user) {
    throw new Error('Invalid Credentials');
  }

  if (user.role !== 'Management') {
    throw new Error('Only Management can login.');
  }
console.log('Username:', username);
console.log('User:', user);
  const validPassword = await bcrypt.compare(
    password,
    user.password
  );

  if (!validPassword) {
    throw new Error('Invalid Credentials');
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d',
    }
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      role: user.role,
    },
  };
};

module.exports = {
  login,
};