var mongoose = require('mongoose');
var Medication = require('../models/medication');
var ObjectId = mongoose.Types.ObjectId();

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}

module.exports.medicationsReadAll = function(req, res) {
    Medication.find({})
    .exec(function(err, medications) {
        if(!medications) {
            sendJsonResponse(res, 404, {"message":"medications not found"});
            return;
        } else if(err) {
            sendJsonResponse(res, 404, err);
            return;
        }
        sendJsonResponse(res, 200, medications);
    })
}

module.exports.medicationsReadOne = function(req, res) {
    console.log(req.params.medicationReferenceId);
    if(req.params && req.params.medicationReferenceId) {
        Medication.findOne({ "referenceId" : req.params.medicationReferenceId})
        .exec(function(err, medication) {
            if(!medication) {
                sendJsonResponse(res, 404, {"message":"medication not found"});
                return;
            } else if (err) {
                sendJsonResponse(res, 404, err);
                return;
            } 
            sendJsonResponse(res, 200, medication);
        })
    }
    else {
        sendJsonResponse(res, 404, {"message": "No medication reference id in request"});
    }  
}

module.exports.medicationsCreateOne = function(req, res) {
    var file = req.file;
    console.log('======')
    console.log(file);

    console.log('perapro');
    console.log(req.body);
    if(req.body && file) {
        var post = new Medication({
            address: req.body.address,
            surface: req.body.surface, 
            price: req.body.price,
            structure: req.body.structure,
            floor: req.body.floor,
            central_heating: req.body.central_heating,
            parking: req.body.parking,
            elevator: req.body.elevator,
            terrace: req.body.terrace,
            owner: {
                owner_id: ObjectId, //ovde treba da se getuje ownerid
                type_of_owner: 'agency'
            },
            pictures: [file.path],
            marker: req.body.marker,
            referenceId : req.body.referenceId
        });
        console.log(post);
        post.save(function (err) {
            if (err) {
                sendJsonResponse(res, 404, err);

                return;
            }
            else {
                sendJsonResponse(res, 200, post);
            }
        });
    }
    else {
        sendJsonResponse(res, 404, {"message":"body doesn't exist"})
    }
}

module.exports.medicationsDeleteOne = function(req, res) {
    var medicationid = req.params.medicationid;

    if(req.params && medicationid) {
        Medication.findById(medicationid)
        .exec(function(err, medication) {
            if(err) {
                sendJsonResponse(res, 404, {"message":"medicationid not found"});
                return;
            }
            else {
                medication.remove(function(err) {
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

module.exports.medicationsUpdateOne = function(req, res) {
    var medicationid = req.params.medicationid;

    if(req.params && medicationid) {
        Medication.findById(medicationid)
        .exec(function(err,medication) {
            if(err) {
                sendJsonResponse(res, 404, err);
                return;
            }
            if(!medication) {
                sendJsonResponse(res, 404, {
                    "message" : "medicationid not found"
                });
            } 

            else {
                if(req.body.address)
                    medication.address = req.body.address;
                if(req.body.surface)
                    medication.surface = req.body.surface;
                if(req.body.price)
                    medication.price = req.body.price;
                if(req.body.floor)
                    medication.floor = req.body.floor;
                if(req.body.central_heating)
                    medication.central_heating = req.body.central_heating;
                if(req.body.parking)
                    medication.parking = req.body.parking;
                if(req.body.elevator)
                    medication.elevator = req.body.elevator;
                if(req.body.terrace)
                    medication.terrace = req.body.terrace;
                if(req.body.pictures) 
                    medication.pictures.push(req.body.pictures);
                medication.save(function(err, medication) {
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
