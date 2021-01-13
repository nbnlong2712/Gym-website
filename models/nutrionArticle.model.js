const db = require('../utils/db');

module.exports = {
  async all() {
    const sql = 'select * from article';
    const [rows, fields] = await db.load(sql);
    return rows;
  },

  async single(id) {
    const sql = `select * from article where Ar_ID=${id}`;
    const [rows, fields] = await db.load(sql);
    if (rows.length === 0)
      return null;
      
    return rows[0];
  },
};
