const express = require('express');
const router = express.Router();
const { User } = require('../models');
const sha256 = require('js-sha256');
const checkJWT = require('../middlewares/auth');
const checkADM = require('../middlewares/authAdm');

router.get('/', checkJWT, checkADM, async(req, res)=>{
    const users = await User.findAll();
    res.status(200).json(users);
});

router.post('/', async(req, res)=>{
    const user = await User.create({
        userName: req.body.userName,
        password: sha256("pp_o_mais_brabo@senac2019.c0m.br"+req.body.password+"15!@hklti_-=130O.asqu"),
        email: req.body.email
    });
    res.status(201).json(user);
});

router.delete('/:id', async(req, res)=>{
    const user = await User.destroy({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(user);
});

module.exports = router