import {Router} from 'express';
const router = new Router();
import * as MedicationController from '../controllers/medications';


router.route('/medications').get( MedicationController.medicationsReadAll);
router.route('/medications/:medicationsid').get( MedicationController.medicationsReadOne);
router.route('/medications').post(MedicationController.medicationsCreateOne);
router.route('/medication/:medicationsid').put(MedicationController.medicationsUpdateOne);
router.route('/medications/:apartmentForSaleReferenceId').delete( MedicationController.medicationsDeleteOne);

module.exports = router;