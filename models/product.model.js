const db = require('../utils/db');

module.exports = {
  async all() {
    const sql = 'select * from supplement';
    const [rows, fields] = await db.load(sql);
    return rows;
  },

  async allByCat(catId) {
    const sql = `select * from products where CatID=${catId}`;
    const [rows, fields] = await db.load(sql);
    return rows;
  },

  async single(id) {
    const sql = `select * from supplement where Sup_ID=${id}`;
    const [rows, fields] = await db.load(sql);
    if (rows.length === 0)
      return null;

    return rows[0];
  },
};
