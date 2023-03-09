const cloudinary = require('cloudinary');

const { User } = require('../models/userModel');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
})

const uploadProfilePix = (req, res) => {
    let {picture, onlineUserEmail, signedInUser} = req.body;
    // console.log(req.body)
    cloudinary.v2.uploader.upload(picture, (err, result)=> {
        try {
            // console.log(picture)
            console.log(result)
            User.updateOne({_id: signedInUser}, {profilePix: result.secure_url}, function(err, response) {
                if(err) {
                    console.log(err)
                }else {
                    console.log("Profile picture uploaded successfully " + response);
                    res.json({succsess: true, message: "Profile picture uploaded successfully"})
                }
            })            
        } catch (error) {
            console.log(error);
        }
    })
}

module.exports = {uploadProfilePix}