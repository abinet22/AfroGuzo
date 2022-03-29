module.exports = (sequelize, DataTypes) => {
    const Application = sequelize.define("Application", {
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true
        // }


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