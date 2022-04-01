module.exports = (sequelize, DataTypes) => {
    const Application = sequelize.define("Application", {
     
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        middleName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName_am: {
            type: DataTypes.STRING,
            allowNull: false
        },
        middleName_am: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // lastName_am: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // phone_number: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // email: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // birthday: {
        //     type: DataTypes.DATE,
        //     allowNull: false
        // },
        // gender: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // passport_no: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // place_of_issue: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // date_of_issue: {
        //     type: DataTypes.DATE,
        //     allowNull: false
        // },
        // nationality: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // passport_type: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // place_of_birth: {
        //     type: DataTypes.DATE,
        //     allowNull: false
        // },
        // expiry_date: {
        //     type: DataTypes.DATE,
        //     allowNull: false
        // },
        // other_nationality: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // religion: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // occupation: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // education: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // year_completed: {
        //     type: DataTypes.DATE,
        //     allowNull: false
        // },
        // city: {
        //     type: DataTypes.STRING,
        // },
        // woreda: {
        //     type: DataTypes.STRING,
            
        // },
        // passport_type: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // martial_status: {
        //     type: DataTypes.DATE,
        //     allowNull: false
        // },
        // home_address: {
        //     type: DataTypes.STRING,
        // },
        // sub_city: {
        //     type: DataTypes.STRING,
        // },
        // region: {
        //     type: DataTypes.STRING,
        // },
        // shelf_no: {
        //     type: DataTypes.STRING,
        // },
        // visa_no: {
        //     type: DataTypes.STRING,
        // },
        // visa_type: {
        //     type: DataTypes.STRING,
        // },
        // visa_sign_date: {
        //     type: DataTypes.DATE,
        // },
        // salary: {
        //     type: DataTypes.STRING,
        // },
        // port_of_entry: {
        //     type: DataTypes.STRING,
        // },
        // port_of_entry_remark: {
        //     type: DataTypes.STRING,
        // },
        // sponsor_name: {
        //     type: DataTypes.STRING,
        // },
        // sponsor_name_arabic: {
        //     type: DataTypes.STRING,
        // },
        // sponsor_id: {
        //     type: DataTypes.STRING,
        // },
        // sponsor_address: {
        //     type: DataTypes.STRING,
        // },
        // sponsor_email: {
        //     type: DataTypes.STRING,
        // },
        // sponsor_phone: {
        //     type: DataTypes.STRING,
        // },
        // office_abroad: {
        //     type: DataTypes.STRING,
        // },
        // relative_name: {
        //     type: DataTypes.DATE,
        // },
        // relative_phone_no: {
        //     type: DataTypes.STRING,
        // },
        // relative_2nd_phone_no: {
        //     type: DataTypes.STRING,
        // },
        // relative_email: {
        //     type: DataTypes.STRING,
        // },
        // relative_address: {
        //     type: DataTypes.STRING,
        // },
        // relative_city: {
        //     type: DataTypes.STRING,
        // },
        // relative_zone: {
        //     type: DataTypes.STRING,
        // },
        // relative_woreda: {
        //     type: DataTypes.DATE,
        // },
        // relative_HN: {
        //     type: DataTypes.STRING,
        // },
        // relative_DOB: {
        //     type: DataTypes.DATE,
        // },
        // relative_gender: {
        //     type: DataTypes.STRING,
        // },
        // coc_center: {
        //     type: DataTypes.STRING,
        // },
        // coc_center_address: {
        //     type: DataTypes.STRING,
        // },
        // training_center: {
        //     type: DataTypes.STRING,
        // },
        // training_type: {
        //     type: DataTypes.DATE,
        // },
        // training_center_address: {
        //     type: DataTypes.STRING,
        // },
        // medical_date: {
        //     type: DataTypes.DATE,
        // },
        // medical_place: {
        //     type: DataTypes.STRING,
        // },
        // forensic: {
        //     type: DataTypes.STRING,
        // },
        // insurance_no: {
        //     type: DataTypes.STRING,
        // },
        // id_card: {
        //     type: DataTypes.STRING,
        // },
        // relative_id_card: {
        //     type: DataTypes.STRING,
        // },
        // pre_departure_card: {
        //     type: DataTypes.STRING,
        // },
        // education_certification: {
        //     type: DataTypes.STRING,
        // },
        // en_skill: {
        //     type: DataTypes.STRING,
        // },
        // arabic_skill: {
        //     type: DataTypes.STRING,
        // },
        // local_experience: {
        //     type: DataTypes.STRING,
        // },
        // abroad_experience: {
        //     type: DataTypes.STRING,
        // },
        // works_in: {
        //     type: DataTypes.STRING,
        // },
        // number_of_children: {
        //     type: DataTypes.STRING,
        // },
        // height: {
        //     type: DataTypes.STRING,
        // },
        // weight: {
        //     type: DataTypes.STRING,
        // },
        // ironing: {
        //     type: DataTypes.STRING,
        // },
        // cooking: {
        //     type: DataTypes.STRING,
        // },
        // sewing: {
        //     type: DataTypes.STRING,
        // },
        // b_sitting: {
        //     type: DataTypes.STRING,
        // },
        // child_care: {
        //     type: DataTypes.STRING,
        // },
        // arab_cooking: {
        //     type: DataTypes.STRING,
        // },
        // cleaning: {
        //     type: DataTypes.STRING,
        // },
        // washing: {
        //     type: DataTypes.STRING,
        // },
        // imageType: {
        //     type: DataTypes.STRING,
        // },
        // imageName: {
        //     type: DataTypes.STRING,
        // },
        // imagePath: {
        //     type: DataTypes.STRING,
        // },
        // imageData: {
        //     type: DataTypes.BLOB("long"),
        // },

    }); // end of table column definition 

    // establish association between Agency and it's Application
    Application.associate = models => {
        Application.belongsTo(models.Agency, {
            foreignKey: {
                allowNull: false
            }
        });
    }; // end of association 

    return Application;
    
} // end of export 