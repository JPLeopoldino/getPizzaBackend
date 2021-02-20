const { User } = require('../models');

const checkADM = async (req, res, next)=>{
    const result = await User.findAll({
        where:{
            id: req.body.id
        }
    });

    console.log(result[0].type);

    if(result[0].type != "ADM"){
        res.status(401).json({message: "Not Allowed"})
    }

    next();

}

module.exports = checkADM;