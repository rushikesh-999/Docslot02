import bcrypt from 'bcrypt';

const newPassword = 'newPassword123';

bcrypt.hash(newPassword, 10).then(hash => {
  console.log('New hashed password:', hash);
}).catch(err => {
  console.error('Error hashing password:', err);
});

