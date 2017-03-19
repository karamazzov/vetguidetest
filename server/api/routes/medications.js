import {Router} from 'express';
const medicationRouter = new Router();
import * as MedicationController from '../controllers/medications';


medicationRouter.route('/medications').get( MedicationController.medicationsReadAll);
medicationRouter.route('/medications/:medicationsid').get( MedicationController.medicationsReadOne);
medicationRouter.route('/medications').post(MedicationController.medicationsCreateOne);
medicationRouter.route('/medication/:medicationsid').put(MedicationController.medicationsUpdateOne);
medicationRouter.route('/medications/:apartmentForSaleReferenceId').delete( MedicationController.medicationsDeleteOne);

module.exports = medicationRouter;