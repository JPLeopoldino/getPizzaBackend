const express = require('express');
const router = express.Router();
const { Product } = require('../models');
const checkJWT = require('../middlewares/auth');

router.get('/', checkJWT, async (req, res) => {
    const products = await Product.findAll();
    res.status(200).json(products);
});

router.get('/:id', checkJWT, async (req, res) => {
    const product = await Product.findAll({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(product);
});

router.post('/', checkJWT, async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json(product);
});

router.delete('/:id', checkJWT, async (req, res) => {
    const product = await Product.destroy({
        where:{
            id: req.params.id
        }
    });
    res.status(200).json(product);
});

router.put('/:id', checkJWT, async (req, res) => {
    const product = await Product.update(req.body, {
        where:{
            id: req.params.id
        }
    });
    res.status(200).json(product);
});

module.exports = router;