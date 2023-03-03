const { Resources } = require("../models/resources.model");
const {Courses} = require('../models/courses.model')


const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });

const stageTwoOfAddResources = async(req, res)=>{
    // const {resourceName, resourceFile, resourceType, resourceDuration, resourceLink, signedInUser} = req.body;
    console.log(req.body)
    // Resources.findOne({"resourceName": resourceName},(err, foundResources)=>{
    //     if (err) {
    //         res.json({status: false, message: "Error occurred While adding resources. Please try again", errorOccurred: true})

    //     }else{
    //         if(!foundResources){
    //             cloudinary.v2.uploader.upload(resourceFile,{timeout: 120000,resource_type:"auto",folder:"Easy Learning"},(err,result)=>{
    //                 if(err){
    //                     console.log(err);
    //                     res.json({status: false, message: "Error occurred while adding resources. Please try again", errorOccurred: true})

    //                 }else{
    //                     Courses.find({"authorId": signedInUser}, (err, courses)=> {
    //                         const courseId = courses[courses.length - 1]._id;
    //                         console.log( {resourceName: resourceName, file: result.secure_url, courseId, courseDuration: resourceDuration, resourceType: resourceType, resourceLink: resourceLink});
    //                         Resources.create( {resourceName: resourceName, file: result.secure_url, courseId, courseDuration: resourceDuration, resourceType: resourceType, resourceLink: resourceLink}, (err, response)=>{
    //                             if (err) {
    //                                 console.log(err);
    //                                 res.json({status: false, message: "Error occurred while adding resources. Please try again", errorOccurred: true})
                                    
    //                             }else {
    //                                 console.log('Success');
    //                                 console.log(response)
    //                                 res.json({status: true, message: "Successful"})
    //                             }
    //                         })
    //                         })
    //                 }
                    
    //             })
    //         }
    //         else {
    //             console.log('Resource exists');
    //             res.json({status: false, message: "You already have a resource with the same name. Go back and edit", isExists: true})
    //         }
    //     }
    // })
}

const getCourseResources = (req, res) => {
    Resources.find({"courseId": req.body.id}, (err, result)=> {
        if(err) {
            console.log(err)
            res.json({status: false, message: "An unexpected error occurred. Please try again"});
        }else {
            // console.log(result)
            res.json({status: true, resources: result})
        }
    })
}
module.exports = { stageTwoOfAddResources, getCourseResources}


