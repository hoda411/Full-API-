const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json())
const coachController = require('../controller/coachcontroller');


router.post('/newcoach', coachController.create);
router.get('/all/:id',coachController.getAll)
router.get('/:id',coachController.getone)
router.put('/update/:id',coachController.updatedata)
router.delete('/deletecoach/:id',coachController.deletecoachdata)



module.exports = router;

