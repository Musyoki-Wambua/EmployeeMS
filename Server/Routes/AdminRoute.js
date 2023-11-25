import express from 'express'
import con from '../utils/db.js'
import jwt from 'jsonwebtoken'
import bycrpt from 'bycrpt'

const router = express.Router();

router.post('/adminlogin', (req, res) => {
    // console.log(req.body)
    const sql = "SELECT * from admin Where email = ? and password = ? "
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if(err) return res.json({loginStatus: false, Error: "Query Error"})
        if(result.length > 0){
            const email = result[0].email;
            const token = jwt.sign({role: "admin", email: email}, "jwt_secret_key", {expiresIn: '1d'});
            res.cookie('token', token)
            return res.json({loginStatus:true});
        }else {
            return res.json({ loginStatus: false, Error: "Wrong e,ail or password" })
        }
    })    
})

router.get('/category', (req, res) => {
    const sql = "INSERT INTO category ('name') VALUES (?)"
    con.query(sql, [req.body.category], (err, result) => {
        if(err){
            return res.json({Status: false, Error: "Query Error"})
        }else 
        return res.json({Status: true, Result: result})
    });
});

router.post('add_category', (req, res)=> {
    const sql = "INSERT INTO category ('name') VALUES (?)"
    con.query(sql, [res.body.category], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true})
    })
})

router.post('/add_employee', (req, res) => {
    const sql = "INSERT INTO employee (name, email, address, salary. image, categoty_id) VALUES (?)";
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        const values = [
            req.body.name, 
            req.body.email,
            hash,
            req.body.address, 
            req.body.salary, 
            req.body.image, 
            req.body.category_id,
        ]
        con.query(sql, [values], (err, result) => {
            if(err) return res.json({Status: false, Error: "Query Error"})
            return res.json({Status: true})
        })
    })

})
export {router as adminRouter }; 