const express = require("express");
const router = express.Router();

// All Available Courses
router.get('/learner/search-about-courses', (req,res,next)=>{
    
    res.status(200).json({data:"Get-All-Available-Courses"})
    
});

// Add New Account
router.post('/learner/add-acc', (req,res,next)=>{
    
    res.status(200).json({data:"account Is Added"})
    
});

// Get All Details of Course"
router.get('/learner/course-id', (req,res,next)=>{
    
    res.status(200).json({data:"Get-All-Details-of-Course"})
    
});

// Add New Complain
router.post('/learner/add-complain', (req,res,next)=>{
    
    res.status(200).json({data:" Complain Is Added"})
    
});

// Add New Rate To Course
router.post('/learner/add-rate', (req,res,next)=>{
    
    res.status(200).json({data:"Rate Is Added"})
    
});
module.exports = router;