const Experience = require("../modules/schemaexperience");
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json())
exports.create = async (req, res) => {
    const post=new Experience(
        {
            name:req.body.n1, person:req.body.n2
        }
    )
            const point1 = await post.save()

        if(!point1) return res.status(404).send('not found')
        res.send(point1)
    }

exports.getAll=async(req,res)=>{
    try {

        const c = await Experience. find({})
        res.json(c)
        
            } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error: error });
            }
}


exports.getone=async(req,res)=>{
    try {

        const c = await Experience.findById(req.params.id)
        res.json(c)
        
            } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error: error });
            }
}


exports.updatedata=async(req,res)=>{
    const up = await Experience.findByIdAndUpdate(
        req.params.id,
                {
                    name:req.body.n1, person:req.body.n2
                }
        
            )
            if(!up)
            return res.status(400).send('can not be updated!')
        
            res.send(up);
}


exports.deleteexdata=async(req,res)=>{
    Experience.findByIdAndRemove(req.params.id)
    .then(Coach =>{
        if(Coach) {
            return res.status(200).json({success: true, message: 'the coach is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "coach not found!"})
        }
    }).catch(err=>{
        return res.status(500).json({success: false, error: err}) 
    })
}
