import { connection as db } from "../config/index.js";

class Products {
    fetchProducts(req, res) {
        const qry = `
        SELECT prodID,
        prodName,
        prodQuantity,
        prodPrice,
        ProdDescription,
        ProdImage
        FROM Products;
        `;
        db.query(qry, (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    fetchProductById(req, res) {
        const id = parseInt(req.params.id); // Parse the id to an integer
        if (isNaN(id)) {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }

        const qry = `
        SELECT prodID,
        prodName,
        prodQuantity,
        prodPrice,
        ProdDescription,
        ProdImage
        FROM Products
        WHERE prodID = ${id};
        `;
        db.query(qry, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            if (result.length === 0) {
                res.status(404).json({ error: 'Product not found' });
                return;
            }
            res.json({
                status: res.statusCode,
                result: result[0]
            });
        });
    }

    addProduct(req, res) {
        const qry = `
        INSERT INTO Products
        SET ?;
        `;
        db.query(qry, [req.body], (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.json({
                status: res.statusCode,
                msg: 'New product was added'
            });
        });
    }

    updateProduct(req, res) {
        const qry = `
        UPDATE Products
        SET ?
        WHERE prodID = ${req.params.id};
        `;
        db.query(qry, [req.body], (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.json({
                status: res.statusCode,
                msg: "The product information has been updated."
            });
        });
    }

    deleteProduct(req, res) {
        const qry = `
        DELETE FROM Products
        WHERE prodID = ${req.params.id};
        `;
        db.query(qry, (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.json({
                status: res.statusCode,
                msg: "The product information has been deleted."
            });
        });
    }
}

export { Products };
