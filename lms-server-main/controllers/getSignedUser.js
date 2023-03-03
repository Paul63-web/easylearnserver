const { User } = require("../models/userModel");


const getSignedInUser = (req, res) => {
    const _id = req.body.signedInUser;

    User.findOne({_id}, (err, user)=> {
        if(err) {
            res.json({status: false, message: "Please reload this page"})
        }else {
          res.json({status: true, user})
        }
    })
}

module.exports = {getSignedInUser};