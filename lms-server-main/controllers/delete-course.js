const { Courses } = require("../models/courses.model");
const { handleError } = require("../prepared/handleError")

const deleteCourse = (req, res)=> {
    Courses.deleteOne({_id: req.body._id}, (err, result)=> {
        if(err) {
            handleError(err, res)
        }else {
            console.log("deleted")
            res.json({status: true, result, message: "Course successfully deleted"});
        }
    })
}

module.exports = { deleteCourse };