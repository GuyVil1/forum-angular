const { response } = require('express');
const express = require('express');
const db = require('../../models');

class UserController{

    async getAllAction(req, response){
        console.log(db);
        db.Users.findAll({includes: 'Roles'})
        .then(async data => {
            console.log(data); 
            response.json({user: data});
        }).catch(err => response.json(err));
    }

    getByUsername({params: {username}}, response){
        db.Users.findOne({where: {username}})
            .then(async data => {
                console.log(data);
                response.json({user : data});
            })
            .catch(err => response.json(err));
    }

    getRolesByUserId({params: {id}}, response){
        db.Users.finByPk(id, {includes: ['Roles']})
            .then(async data => {
                response.json(data.Roles)
            })
            .catch(err => response.json(err));
    }

    createAction({body}, response){
        console.log(db.Users);
        db.Users.create({...body})
            .then(user => response(200).json(user))
            .catch(err => response.json(err));
    }

    async updateAction({params: {id}, body}, response){
        const user = await db.Users.findByPk(id);
        user.update({...body})
            .then(updateUser => response.json(updateUser));
    }

    async addRolesToUserAction({params: {id}, body}, response){
        const user = await db.Users.findByPk(id);
        const role = await db.Roles.create({...body});
        user.addRole(role.id)
            .then(user => response.json(user));
    }
}


module.exports = new UserController();