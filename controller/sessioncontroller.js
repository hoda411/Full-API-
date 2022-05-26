const Session = require("../modules/schemasession");
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json())
exports.create = async (req, res) => {
    const post=new Session(
        {
            name:req.body.n1, person:req.body.n2,
            time:req.body.n3 , price:req.body.n4
        }
    )
            const point1 = await post.save()

        if(!point1) return res.status(404).send('not found')
        res.send(point1)
    }

exports.getAll=async(req,res)=>{
    try {

        const c = await Session. find({})
        res.json(c)
        
            } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error: error });
            }
}


exports.getone=async(req,res)=>{
    try {

        const c = await Session.findById(req.params.id)
        res.json(c)
        
            } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error: error });
            }
}


exports.updatedatase=async(req,res)=>{
    const up = await Session.findByIdAndUpdate(
        req.params.id,
                {
                    name:req.body.n1, person:req.body.n2,
                    time:req.body.n3 , price:req.body.n4
                }
        
            )
            if(!up)
            return res.status(400).send('can not be updated!')
        
            res.send(up);
}


exports.deletedatase=async(req,res)=>{
    Session.findByIdAndRemove(req.params.id)
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
