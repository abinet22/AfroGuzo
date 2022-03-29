module.exports = (sequelize, DataTypes) => {
   
    const Agency = sequelize.define("Agency", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        agency_name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subscription_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_active: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Agency.associate = models => {
        // this agency have one to many relation with application
        Agency.hasMany(models.Application, {
            // deletes all applications created by this user 
            onDelete: "cascade" 
        });

        // Agency has one to one relation with Profile
        Agency.hasOne(models.Profile, {
            // deletes all applications created by this user 
            onDelete: "cascade"  
        });
    };

    return Agency;
}