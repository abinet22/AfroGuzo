module.exports = (sequelize, DataTypes)  => {
    const Profile = sequelize.define("Profile", {
        agency_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }); // end of table column definition 

    // establish association between Agency and it's profile
    Profile.associate = models => {
        Profile.belongsTo(models.Agency, {
            foreignKey: {
                allowNull: false
            }
        });
    }; // end of association 

    return Profile;

} // end of export 