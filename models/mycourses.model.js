const db = require('../utils/db');

module.exports = {
    async single(idUser, idCourse) {
        const sql = `select * from bill where User_ID = ${idUser} and Course_ID=${idCourse}`;
        const [rows, fields] = await db.load(sql);
        if (rows.length === 0)
          return null;
        else
        {
        return true;
        }
      },
  async all(id) {
    const sql = `select * from bill b JOIN course c on b.Course_ID=c.Cou_ID where b.User_ID=${id} `;
    const [rows, fields] = await db.load(sql);
    if (rows.length === 0)
      return null;

    return rows;
  },
  async all1() {
    const sql = 'select * from course';
    const [rows, fields] = await db.load(sql);
    return rows;
  },
  async add(course) {
    const [rows, fields] = await db.add(course, 'bill');
    return rows;
  },
  
};
