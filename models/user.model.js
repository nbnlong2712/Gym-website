const db = require('../utils/db');

module.exports = {
  
  async single(id) {
    const sql = `select * from users where User_ID = ${id}`;
    const [rows, fields] = await db.load(sql);
    if (rows.length === 0)
      return null;

    return rows[0];
  },
  async add(user) {
    const [rows, fields] = await db.add(user, 'users');
    return rows;
  },
  async singleByUserName( userName)
  {
    const sql= `select * from users where User_name='${userName}'`;
    const [rows, fields]=await db.load(sql);
    if(rows.length===0)
    {
      return null;
    }
    return rows[0];
  }
};
