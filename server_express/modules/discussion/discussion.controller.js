const express = require('express');
const db = require('../../models');

class DiscussionController{

    //TODO: in theory, there is no getAll for discussion. But still put here if needed.
    async getAllAction(request, response){
        //TODO: check if the discussionId must be 1 everytime and why 
        //TODO: check if findOne will bring back ALL messages from this discussion.
        const message = await db.Messages.findOne({include: ['Discussion'], where: {"DiscussionId": 1}});
        db.Discussions.findAll({include: 'Messages'}).then( async data => {
            response.json({discussion: data, message})
        }).catch(error => response.json(error));
    }

    getByTitleAction({params: {title}}, response){
        db.Discussions.findOne( {where : {title}})
        .then( async data => {
            response.json({discussion: data})
        })
        .catch(error => response.json(error));
    }

    //Get one discussion messageS
    getMessagesByDiscussionIdAction({params: {id}}, response){
        db.Discussions.findByPk(id, {include: ['Messages']})
        .then(async data => {
            response.json(data.Messages)
        })
        .catch(error => response.json(error));
    }

    //TODO: check if the where in update is done like that
    updateDiscussionAction({params: {id}, body}, response){
        db.Discussions.update({where: {id}})
        .then(updateDiscussion => response.json(updateDiscussion))
        .catch(error => response.json(error));
    }

    createAction({body}, response){
        db.Discussions.create({...body})
        .then(discussion => response(203).json(discussion))
        .catch(error => response.json(error))
    }

    async createMessageAction({params: {id}, body}, res) {
        const discussion = await db.Discussions.findByPk(id);
        const message = await db.Messages.create({...body});
        await message.setDiscussion(discussion);

        res.json(discussion.message);
    }


    //TODO: UpdateMessageAction() (Careful the front will decide the access the user/moderator/main has) 
    /*
    Update can :
        - modify the conten
        - modify the isActive
    */
}

module.exports = new DiscussionController();