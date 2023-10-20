import Product from "../models/product.model.js";
import express from "express";

const router = express.Router();
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).send(products);
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.post("/", async (req, res) => {
    try {
        const { productName, price } = req.body;
        const newProduct = new Product({
          productName,
          price,
        });
        await newProduct.save();
        return res.status(200).send(newProduct);
    } catch (error) {
       return res.status(500).send(error); 
    }
    
});

export default router