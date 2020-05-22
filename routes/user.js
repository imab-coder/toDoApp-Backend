const express = require('express')
const userController = require('./../controllers/userController')
const appConfig = require('./../config/appConfig')
const auth = require('./../middlewares/auth')

let setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`

    app.post(`${baseUrl}/signup`, userController.signUpFunction);

    app.post(`${baseUrl}/login`, userController.loginFunction);

    app.post(`${baseUrl}/:userId/delete`,auth.isAuthorized, userController.deleteUser);

    app.get(`${baseUrl}/view/all`, userController.getAllUser);

    app.get(`${baseUrl}/:userId/details`, auth.isAuthorized, userController.getSingleUser);

    app.post(`${baseUrl}/logout/:userId`,auth.isAuthorized, userController.logout)

}

module.exports = {
    setRouter: setRouter
}