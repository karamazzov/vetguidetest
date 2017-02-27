var express = require('express');
var router = express.Router();
var ctrlMedications = require('../controllers/medications');


router.get('/medications', ctrlMedications.usersReadAll);
router.get('/medications/:medicationsReferenceId', ctrlMedications.usersReadOne);
router.post('/medications', upload.single('file'), ctrlMedications.usersCreateOne );
router.delete('/medications/:apartmentForSaleReferenceId', ctrlMedications.usersDeleteOne);

module.exports = router;