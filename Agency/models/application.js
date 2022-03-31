module.exports =  (sequelize, DataTypes)  => {
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
        lastName_am: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passport_no: {
            type: DataTypes.STRING,
            allowNull: false
        },
        place_of_issue: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_of_issue: {
            type: DataTypes.DATE,
            allowNull: false
        },
        nationality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passport_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        place_of_birth: {
            type: DataTypes.DATE,
            allowNull: false
        },
        expiry_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        other_nationality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        religion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        occupation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        education: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year_completed: {
            type: DataTypes.DATE,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
        },
        woreda: {
            type: DataTypes.STRING,  
        },
        martial_status: {
            type: DataTypes.DATE,
            allowNull: false
        },
        home_address: {
            type: DataTypes.STRING,
        },
        sub_city: {
            type: DataTypes.STRING,
        },
        region: {
            type: DataTypes.STRING,
        },
        shelf_no: {
            type: DataTypes.STRING,
        },
        visa_no: {
            type: DataTypes.STRING,
        },
        visa_type: {
            type: DataTypes.STRING,
        },
        visa_sign_date: {
            type: DataTypes.DATE,
        },
        salary: {
            type: DataTypes.STRING,
        },
        port_of_entry: {
            type: DataTypes.STRING,
        },
        port_of_entry_remark: {
            type: DataTypes.STRING,
        },
       
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