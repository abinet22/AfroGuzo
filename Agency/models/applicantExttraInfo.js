module.exports = (sequelize, DataTypes) => {
   
    const ApplicantExtraInfo = sequelize.define("ApplicantExtraInfo", {
        sponsor_name: {
            type: DataTypes.STRING,
        },
        sponsor_name_arabic: {
            type: DataTypes.STRING,
        },
        sponsor_id: {
            type: DataTypes.STRING,
        },
        sponsor_address: {
            type: DataTypes.STRING,
        },
        sponsor_email: {
            type: DataTypes.STRING,
        },
        sponsor_phone: {
            type: DataTypes.STRING,
        },
        office_abroad: {
            type: DataTypes.STRING,
        },
        relative_name: {
            type: DataTypes.DATE,
        },
        relative_phone_no: {
            type: DataTypes.STRING,
        },
        relative_2nd_phone_no: {
            type: DataTypes.STRING,
        },
        relative_email: {
            type: DataTypes.STRING,
        },
        relative_address: {
            type: DataTypes.STRING,
        },
        relative_city: {
            type: DataTypes.STRING,
        },
        relative_zone: {
            type: DataTypes.STRING,
        },
        relative_woreda: {
            type: DataTypes.DATE,
        },
        relative_HN: {
            type: DataTypes.STRING,
        },
        relative_DOB: {
            type: DataTypes.DATE,
        },
        relative_gender: {
            type: DataTypes.STRING,
        },
        coc_center: {
            type: DataTypes.STRING,
        },
        coc_center_address: {
            type: DataTypes.STRING,
        },
        training_center: {
            type: DataTypes.STRING,
        },
        training_type: {
            type: DataTypes.DATE,
        },
        training_center_address: {
            type: DataTypes.STRING,
        },
        medical_date: {
            type: DataTypes.DATE,
        },
        medical_place: {
            type: DataTypes.STRING,
        },
        forensic: {
            type: DataTypes.STRING,
        },
        insurance_no: {
            type: DataTypes.STRING,
        },
        id_card: {
            type: DataTypes.STRING,
        },
        relative_id_card: {
            type: DataTypes.STRING,
        },
        pre_departure_card: {
            type: DataTypes.STRING,
        },
        education_certification: {
            type: DataTypes.STRING,
        },
        en_skill: {
            type: DataTypes.STRING,
        },
        arabic_skill: {
            type: DataTypes.STRING,
        },
        local_experience: {
            type: DataTypes.STRING,
        },
        abroad_experience: {
            type: DataTypes.STRING,
        },
        works_in: {
            type: DataTypes.STRING,
        },
        number_of_children: {
            type: DataTypes.STRING,
        },
        height: {
            type: DataTypes.STRING,
        },
        weight: {
            type: DataTypes.STRING,
        },
        ironing: {
            type: DataTypes.STRING,
        },
        cooking: {
            type: DataTypes.STRING,
        },
        sewing: {
            type: DataTypes.STRING,
        },
        baby_sitting: {
            type: DataTypes.STRING,
        },
        child_care: {
            type: DataTypes.STRING,
        },
        arab_cooking: {
            type: DataTypes.STRING,
        },
        cleaning: {
            type: DataTypes.STRING,
        },
        washing: {
            type: DataTypes.STRING,
        }

    });

    // establish association between Agency and it's Application
    ApplicantExtraInfo.associate = models => {
        ApplicantExtraInfo.belongsTo(models.Agency, {
            foreignKey: {
                allowNull: false
            }
        });
    }; // end of association 

    return ApplicantExtraInfo;
}