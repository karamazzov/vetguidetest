
import Medication from '../models/medication';

let sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
}
/**
 * Get all medications
 * @param req
 * @param res
 * @returns void
 */
export function medicationsReadAll (req, res){
    Medication.find({})
    .exec((err, medications) => {
    if (!medications) {
        sendJsonResponse(res, 404, {"message": "medications not found"});
        return;
    }
    else if(err){
        sendJsonResponse(res, 404, err);
        return;
    }    
    sendJsonresponse(res, 200, medications);
  });
}

/**
 * Read one medication
 * @param req
 * @param res
 * @returns void
 */

 export function medicationsReadOne (req, res){
    if (req.params && req.params.medicationsid){
        Medication.findone({ "medicationsid": req.params.medicationsid})
        .exec((err, medication)=> {
            if(!medication){
                sendJsonresponse(res, 404, {"message": "medication not found"});
                return;
            }
            else if (err){
                sendJsonResponse(res, 404, err);
                return;
            }
            sendJsonresponse(res, 200, medication);
        })
    }
 }

/**
 * Create one medication
 * @param req
 * @param res
 * @returns void
 */
 export function medicationsCreateOne (req, res){
    if(req.body){
        var medication = new Medication({
            brand: req.body.brand,
            manufacturer: req.body.manufacturer,
            form: req.body.form,
            packaging: req.body.packaging,
            active_substance: req.body.active_substance,
            species: req.body.species,
            warnings: req.body.warnings,
            undesired_reactions: req.body.undesired_reactions,
            counterindications: req.body.counterindications,
        });

        medication.save((err) => {
            if (err) {
                sendJsonResponse(res, 404, err);

                return;
            }
            else {
                sendJsonResponse(res, 200, medication);
            }
        });
    }
    else
    {
        sendJsonResponse(res, 404, {"message":"body doesn't exist"});
    }
 }



/**
 * Update one medication
 * @param req
 * @param res
 * @returns void
 */
 export function medicationsUpdateOne( req, res ){
    let medicationsid = req.params.medicationsid;

    if(req.params && medicationsid){
        Medication.findById(medicationsid)
        .exec((err, medication) =>{
            if(err){
                sendJsonResponse(res, 404, err);
                return;
            }
            if(!medication){
                sendJsonresponse(res, 404, {
                    "message" : "medicationsid not found"
                });
            }
            else {
                if(req.body.brand)
                    medication.brand = req.body.brand;
                if(req.body.manufacturer)
                    medication.manufacturer = req.body.manufacturer;
                if(req.body.form)
                    medication.form = req.body.form;
                if(req.body.packaging)
                    medication.packaging = req.body.packaging;
                if(req.body.active_substance)
                    medication.active_substance = req.body.active_substance;
                if(req.body.species)
                    medication.species = req.body.species;
                if(req.body.warnings)
                    medication.warnings = req.body.warnings;
                if(req.body.undesired_reactions)
                    medication.undesired_reactions = req.body.undesired_reactions;
                if(req.body.counterindications)
                    medication.counterindications = req.body.counterindications;
                medication.save((err, medication)=>{
                    if(err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    else {
                        sendJsonResponse(res, 200, medication);
                    }
                });
            }
        });
    }
    
 }



 /**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function medicationsDeleteOne ( req, res ) {
    var medicationsid = req.params.medicationsid;

    if(req.params && medicationsid) {
        Medication.findById(medicationsid)
        .exec((err, medication)=>{
            if(err) {
                sendJsonResponse(res, 404, {"message":"medicationsid not found"});
                return;
            }
            else {
                medication.remove((err)=>{
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    else {
                        sendJsonResponse(res, 200, {"message":"medication deleted " + medication});
                    }
                });
            }
        });
    }

}