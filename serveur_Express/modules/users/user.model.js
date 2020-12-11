const {Model} = require('sequelize');

module.exports = function(sequelize, Datatypes){

    class User extends Model{
        static associate(models){
            //Lien entre les entités
            User.belongsToMany(models.Roles, {through:'User_Roles'});
            // User.belongsToMany(models.Discussion, {through:'User_Discussion', timestamps : true});
            // User.belongsToMany(models.Messages, {through:'User_Messages', timestamps : true});
        }
    }

    //Création des tables
    User.init({
        username: {type: Datatypes.STRING, allowNull: false, unique: true},
        password: {type: Datatypes.STRING, allowNull: false},
        email: {type: Datatypes.STRING, allowNull: false},
        avatar: {type: Datatypes.STRING, allowNull: false},
        lastname: {type: Datatypes.STRING, allowNull: false},
        firstname: {type: Datatypes.STRING, allowNull: false},
        isActive:{type: Datatypes.BOOLEAN, allowNull: false},
        count: {type: Datatypes.INTEGER, allowNull: false}
    }, {
        sequelize, 
        modelName: "Users"
    })

    User.addHook("beforeValidate", (model, options)=>{
        if(model.isActive == null){
            model.isActive = true;
        }
    });

    return User;
}
