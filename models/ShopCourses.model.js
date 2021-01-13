const mysql = require('mysql2/promise');
module.exports={
    async all()
    {
            const connection = await mysql.createConnection({
                host:'localhost',
                user: 'root',
                port: '3306',
                password:'0801',
                database: 'gymweb',
            });
            const sql='select * from course';
            const [rows, fields] = await connection.execute(sql);
            console.log(rows);
            return rows;
    }
    };

