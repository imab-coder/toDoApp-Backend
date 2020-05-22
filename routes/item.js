const express = require('express');
const itemController = require('./../controllers/itemController');
const appConfig = require('./../config/appConfig')
const auth = require('./../middlewares/auth')

let setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/items`;
    
    app.post(`${baseUrl}/additem`, auth.isAuthorized, itemController.addItemFunction);

    app.put(`${baseUrl}/edititem/:itemId`, auth.isAuthorized, itemController.editItemFunction);
    
    app.post(`${baseUrl}/delete/:itemId`, auth.isAuthorized, itemController.deleteItemFunction);
    
    app.get(`${baseUrl}/view/all/:listId`, auth.isAuthorized, itemController.getAllItemsFunction);
    
    app.get(`${baseUrl}/:itemId/details`, auth.isAuthorized, itemController.getItemDetailsFunction);
    
    app.put(`${baseUrl}/addSubItem/:itemId`, auth.isAuthorized, itemController.addSubItemFunction);
    
    app.put(`${baseUrl}/:itemId/updateSubItem`, auth.isAuthorized, itemController.editSubItemFunction);
    
    app.put(`${baseUrl}/deleteSubItem/:itemId`, auth.isAuthorized, itemController.deleteSubItemFunction);
    
}

module.exports = {
    setRouter: setRouter
}
