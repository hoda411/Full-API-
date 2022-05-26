const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json())
const learnerController = require('../controller/learnercontroller');


router.post('/newlearner', learnerController.create);
router.get('/alllearner/:id',learnerController.getAll)
router.get('/learner/:id',learnerController.getone)
router.put('/updatelearner/:id',learnerController.updatedata)
router.delete('/deletelearner/:id',learnerController.deletedata)



module.exports = router;

