import mysql from 'mysql'

const con = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '',
    database: 'employeems'
})

con.connect(function(err) {
    if (err) {
        console.log('Error connecting to Db');
    }else{
        console.log('Connected to Db');
    }
})