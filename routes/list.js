const express = require('express')
const listController = require('./../controllers/listController')
const appConfig = require('./../config/appConfig')
const auth = require('./../middlewares/auth')

let setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/lists`;

    app.post(`${baseUrl}/addList`, auth.isAuthorized, listController.addListFunction);

    app.put(`${baseUrl}/:listId/updateList`, auth.isAuthorized, listController.editListFunction);

    app.post(`${baseUrl}/delete/:listId`, auth.isAuthorized, listController.deleteListFunction);
    
    app.get(`${baseUrl}/view/all/:userId`, auth.isAuthorized, listController.getAllPrivateListsFunction);
    
    app.post(`${baseUrl}/view/all/public/lists`, auth.isAuthorized, listController.getAllPublicListsFunction);
    

}

module.exports = {
    setRouter: setRouter
}