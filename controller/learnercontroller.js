const Learner = require("../modules/schemalearner");
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json())
exports.create = async (req, res) => {
    const post=new Learner(
        {
            name:req.body.n1, pass:req.body.n2,
            email:req.body.n3
        }
    )
            const point1 = await post.save()

        if(!point1) return res.status(404).send('not found')
        res.send(point1)
    }

exports.getAll=async(req,res)=>{
    try {

        const c = await Learner. find({})
        res.json(c)
        
            } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error: error });
            }
}


exports.getone=async(req,res)=>{
    try {

        const c = await Learner.findById(req.params.id)
        res.json(c)
        
            } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error: error });
            }
}


exports.updatedata=async(req,res)=>{
    const up = await Learner.findByIdAndUpdate(
        req.params.id,
                {
                    name: req.body.n1,
                    pass:req.body.n2,
                    email:req.body.n3
                }
        
            )
            if(!up)
            return res.status(400).send('can not be updated!')
        
            res.send(up);
}


exports.deletedata=async(req,res)=>{
    Learner.findByIdAndRemove(req.params.id)
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
