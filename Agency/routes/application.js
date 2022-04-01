const express = require("express");
const router = express.Router();
const db = require("../models")
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const multer = require("multer");
const upload = require("../middleware/upload");

router.post('/new', (req, res) => {

    // TODO:
    // accept the form data and also implement multer uploading here
    // it will be easy to pass the full name of applicant as name for the image file 
    // later it will be easy to associate any image file with it's parent file  

    const application_data = {

        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        firstName_am: req.body.firstName_am,
        middleName_am: req.body.middleName_am,
        lastName_am: req.body.lastName_am,
        phone_number: req.body.phone_number,
        email: req.body.email,
        birthday: req.body.birthday,
        gender: req.body.gender,
        passport_no: req.body.passport_no,
        place_of_issue: req.body.place_of_issue,
        date_of_issue: req.body.date_of_issue,
        nationality: req.body.nationality,
        passport_type: req.body.passport_type,
        place_of_birth: req.body.place_of_birth,
        expiry_date: req.body.expiry_date,
        other_nationality: req.body.other_nationality,
        religion: req.body.religion,
        occupation: req.body.occupation,
        education: req.body.education,
        year_completed: req.body.year_completed,
        city: req.body.city,
        woreda: req.body.woreda,
        passport_type: req.body.passport_type,
        martial_status: req.body.birthday,
        home_address: req.body.city,
        sub_city: req.body.city,
        region: req.body.city,
        shelf_no: req.body.city,
        visa_no: req.body.city,
        visa_type: req.body.city,
        visa_sign_date: req.body.visa_sign_date,
        salary: req.body.city,
        port_of_entry: req.body.city,
        port_of_entry_remark: req.body.city,
        sponsor_name: req.body.city,
        sponsor_name_arabic: req.body.city,
        sponsor_id: req.body.city,
        sponsor_address: req.body.city,
        sponsor_email: req.body.city,
        sponsor_phone: req.body.city,
        office_abroad: req.body.city,
        relative_name: req.body.visa_sign_date,
        relative_phone_no: req.body.city,
        relative_2nd_phone_no: req.body.city,
        relative_email: req.body.city,
        relative_address: req.body.city,
        relative_city: req.body.city,
        relative_zone: req.body.city,
        relative_woreda: req.body.visa_sign_date,
        relative_HN: req.body.city,
        relative_DOB: req.body.visa_sign_date,
        relative_gender: req.body.city,
        coc_center: req.body.city,
        coc_center_address: req.body.city,
        training_center: req.body.city,
        training_type: req.body.visa_sign_date,
        training_center_address: req.body.city,
        medical_date: req.body.visa_sign_date,
        medical_place: req.body.city,
        forensic: req.body.city,
        insurance_no: req.body.city,
        id_card: req.body.city,
        relative_id_card: req.body.city,
        pre_departure_card: req.body.city,
        education_certification: req.body.city,
        en_skill: req.body.city,
        arabic_skill: req.body.city,
        local_experience: req.body.city,
        abroad_experience: req.body.city,
        works_in: req.body.city,
        number_of_children: req.body.city,
        height: req.body.city,
        weight: req.body.city,
        ironing: req.body.city,
        cooking: req.body.city,
        sewing: req.body.city,
        b_sitting: req.body.city,
        child_care: req.body.city,
        arab_cooking: req.body.city,
        cleaning: req.body.city,
        washing: req.body.city,
        imageType: req.body.city,
        imageName: req.body.city,
        imagePath: req.body.city,
        
    }
    
    
    db.Application.create({
        agency_name: req.body.agency_name,
        AgencyId: req.body.AgencyId
    }).then(newApplication => res.send(newApplication)); // end of db instance
     




}); // end of post router

router.get('/all', (req, res) => {
    db.Application.findAll({

    }).then(allApplication => res.send(allApplication));
}); // end of get router

router.get('/find/:id', (req, res) => {
    db.Application.findAll({
        where: { application_no: req.params.id},
        include: [db.Agency]
    }).then(ApplicationById => res.send(ApplicationById));
}); // end of router


module.exports = router;
