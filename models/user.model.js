const db = require('../utils/db');

module.exports = {
  
  async add(user) {
    const [rows, fields] = await db.add(user, 'users');
    return rows;
  },
};
