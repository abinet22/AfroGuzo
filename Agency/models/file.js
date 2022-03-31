module.exports = (sequelize, DataTypes)  => {
    
    const File = sequelize.define("File", {
       
        photo200x200_type: {
            type: DataTypes.STRING,
        },
        photo200x200_name: {
            type: DataTypes.STRING,
        },
        photo200x200_recommended_size: {
            type: DataTypes.STRING,
        },
        photo310x460_type: {
            type: DataTypes.STRING,
        },
        photo310x460_name: {
            type: DataTypes.STRING,
        },
        photo310x460_recommended_size: {
            type: DataTypes.STRING,
        },
        passport_scan_type: {
            type: DataTypes.STRING,
        },
        passport_scan_name: {
            type: DataTypes.STRING,
        },
        passport_scan_recommended_size: {
            type: DataTypes.STRING,
        },
        fingerprint_scan_type: {
            type: DataTypes.STRING,
        },
        fingerprint_scan_name: {
            type: DataTypes.STRING,
        },
        fingerprint_scan_recommended_size: {
            type: DataTypes.STRING,
        },
        medical_scan_type: {
            type: DataTypes.STRING,
        },
        medical_scan_name: {
            type: DataTypes.STRING,
        },
        medical_scan_recommended_size: {
            type: DataTypes.STRING,
        }

    }); // end of table column definition 

    // establish association between Agency and it's File
    File.associate = models => {
        File.belongsTo(models.Agency, {
            foreignKey: {
                allowNull: false
            }
        });
    }; // end of association 

    return File;

} // end of export 