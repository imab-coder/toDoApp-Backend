const express = require('express');
const historyController = require('./../controllers/historyController');
const appConfig = require('./../config/appConfig')
const auth = require('./../middlewares/auth')


let setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/history`;
    
    app.post(`${baseUrl}/addHistory`, auth.isAuthorized, historyController.addHistoryFunction);
    
    app.post(`${baseUrl}/deleteHistory`, auth.isAuthorized, historyController.deleteHistoryFunction);
    
    app.post(`${baseUrl}/getHistory`, auth.isAuthorized, historyController.getHistoryFunction);

}

module.exports = {
    setRouter: setRouter
}