const express = require(express);
const router = express.Router();

const conn = require('../services/db');
const response = require('../servides/response');

// create new product
// @return rsponse()
router.post('/', (req, res)=>{
    let data = ({name: req.body.name, price: req.body.price});
    let sqlQuery = `INSERT INTO products SET ?`;
    let query = conn.query(sqlQuery, data, (err, results)=>{
        if(err){
            throw err;
        }
        res.send(response.apiResponse(results));
    });
});

// get all products
// @return response()
router.get('/',(req, res)=>{
    let sqlQuery = `SELECT * FROM products`;
    let query = conn.query(sqlQuery, (err, results)=>{
        if(err){
            throw err;
        }
        res.send(response.apiResponse(results));
    });
});
// get single product
// @return response()
router.get('/:id',(req, res)=>{
    let sqlQuery = `SELECT * FROM products WHERE id=${req.params.id}`;
    let query = conn.query(sqlQuery, (err, results)=>{
        if(err){
            throw err;
        }
        res.send(response.apiResponse(results));
    });
});

// update product
// @return response()
router.put('/:id',(req, res)=>{
    let sqlQuery = `UPDATE products SET name='${req.body.name}', price='${req.body.price}' WHERE id=${req.params.id}`;
    let query = conn.query(sqlQuery, (err, results)=>{
        if(err){
            throw err;
        }
        res.send(response.apiResponse(results));
    });
});

// delete product
// @return response()
router.put('/:id',(req, res)=>{
    let sqlQuery = `DELETE FROM products WHERE id=${req.params.id}`;
    let query = conn.query(sqlQuery, (err, results)=>{
        if(err){
            throw err;
        }
        res.send(response.apiResponse(results));
    });
});

module.exports = router;