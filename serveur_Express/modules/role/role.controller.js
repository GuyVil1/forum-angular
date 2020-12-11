const express = require('express');
const db = require('../../models');

class RoleController{

    async getAllAction(req, res){
        db.Roles.findAll()
        .then(async data => {
            console.log(data); 
            response.json({role: data});
        }).catch(err => response.json(err));
    }
}

module.exports = new RoleController();