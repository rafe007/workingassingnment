const { check, validationResult } = require('express-validator');
const Register = require('../register');


exports.add = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array() });
    }

    
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let contactnumber = req.body.contactnumber;

    const register = new Register({
        fname: firstname,
        lname: lastname,        
        email: email,
        contactnumber: contactnumber
    });

    const registerObj = {
        fname: firstname,
        lname: lastname,        
        email: email,
        contactnumber: contactnumber
    }

    

    //console.log(JSON.stringify());
    try {
        Register.findOne({ email: email }).then((registerRecords) => {
            if (registerRecords) {
                Register.updateOne({
                    email: email
                }, registerObj, { upsert: true }).then(registerUpdated => {
                    console.log('updated');
                    res.status(200).json({
                        status: 1,
                        data: { "records": true, "msg": "done" }
                    });
                }).catch(error => {
                    res.status(200).json({
                        status: 'error',
                        data: error
                    });
                });
            } else {
                const saveRegister = register.save();
                console.log('inserted');
                res.json({
                    status: 1,
                    data: { "records": saveRegister, "msg": "done" }
                });
            }
        }).catch((err) => {
            res.status(200).json({
                status: 'error',
                data: err
            });
        })

    } catch (err) {
        console.log('error');
        res.json({
            status: 0,
            data: { "msg": err }
        });
    }
}


exports.getUserProfiles = (req, res, next) => {
    //console.log('Hits');
    try {
        Register.find().then((registerRecords) => {
            if (registerRecords) {
                res.json({
                    status: 1,
                    data: { "records": registerRecords, "msg": "true" }
                });
            } else {

                res.json({
                    status: 0,
                    data: { "records": {}, "msg": "false" }
                });
            }
        }).catch((err) => {
            res.status(200).json({
                status: 'error',
                data: err
            });
        })

    } catch (err) {
        console.log('error');
        res.json({
            status: 0,
            data: { "msg": err }
        });
    }

}

exports.deletUserProfile = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array() });
    }

    let email = req.body.email;

    try {
        Register.remove({email: email}).then((deleteRecords) => {
            if (deleteRecords) {
                res.json({
                    status: 1,
                    data: { "records": deleteRecords, "msg": "true" }
                });
            } else {

                res.json({
                    status: 0,
                    data: { "records": {}, "msg": "false" }
                });
            }
        }).catch((err) => {
            res.status(200).json({
                status: 'error',
                data: err
            });
        })

    } catch (err) {
        console.log('error');
        res.json({
            status: 0,
            data: { "msg": err }
        });
    }

}



exports.updateUserProfile = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array() });
    }

    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let contactnumber = req.body.contactnumber;

    const registerObj = {
        fname: firstname,
        lname: lastname,        
        email: email,
        contactnumber: contactnumber
    }


    try {


        Register.deleteOne({ email: email }, registerObj, { upsert: true }).then(registerUpdated => {
            console.log('updated');
            res.status(200).json({
                status: 1,
                data: { "records": true, "msg": "done" }
            });
        }).catch(error => {
            res.status(200).json({
                status: 'error',
                data: error
            });
        });

    } catch (err) {
        console.log('error');
        res.json({
            status: 0,
            data: { "msg": err }
        });
    }
}


