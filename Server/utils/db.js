import mysql from 'mysql'

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    // insecureAuth : true,
    database: 'employeems',
    port: 3307
})

con.connect(function(err) {
    if (err) {
        console.log('Error connecting to DataBase', err);
    }else{
        console.log('Connected to Db');
    }
})
export default con;