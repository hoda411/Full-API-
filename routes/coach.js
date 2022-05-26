const express = require('express');
const router = express.Router();

const coachController = require('../controller/coachcontroller');

router.post('/newcoach', coachController.create);
router.get('/all/:id',coachController.getAll)
router.get('/:id',coachController.getone)
router.put('/update',coachController.updatedata)
router.delete('/deletecoach',coachController.deletecoachdata)



module.exports = router;

