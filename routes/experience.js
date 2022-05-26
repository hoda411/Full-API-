const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json())
const experienceController = require('../controller/experiencecontroller');

router.post('/newexp', experienceController.create);
router.get('/allexp/:id',experienceController.getAll)
router.get('/exp/:id',experienceController.getone)
router.put('/updateexp/:id',experienceController.updatedata)
router.delete('/deleteexp/:id',experienceController.deleteexdata)



module.exports = router;

