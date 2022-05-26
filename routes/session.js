const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json())
const sessionController = require('../controller/sessioncontroller');

router.post('/newsession', sessionController.create);
router.get('/allsession/:id',sessionController.getAll)
router.get('/session:id',sessionController.getone)
router.put('/updatesession/:id',sessionController.updatedatase)
router.delete('/deletesession/:id',sessionController.deletedatase)



module.exports = router;

