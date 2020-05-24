const express = require('express')
const userController = require('./../controllers/userController')
const appConfig = require('./../config/appConfig')
const auth = require('./../middlewares/auth')

let setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`

    app.post(`${baseUrl}/signup`, userController.signUpFunction);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/signup SignUp
     *
     * @apiParam {string} firstName FirstName of the user. (body params) (required)
     * @apiParam {string} lastname LastName of the user. (body params) (required)
     * @apiParam {string} countryName country Name of the user. (body params) (required)
     * @apiParam {string} mobileNumber Mobile Number of the user. (body params) (required)
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     * 
     * @apiSuccessExample {json} Success-Response:
        {
        "error": false,
        "message": "User Created",
        "status": 200,
        "data": [
            {
                "createdOn": "2020-05-24T13:42:58.000Z",
                "validationToken": "Null",
                "email": "abhi@gmail.com",
                "password": "$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa",
                "mobileNumber": "9948839362",
                "countryName": "India",
                "lastName": "Abhishek",
                "firstName": "Av",
                "userId": "B1cyuc8OX"
            }
        }
    */

    app.post(`${baseUrl}/login`, userController.loginFunction);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login Login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     * 
     * @apiSuccessExample {json} Success-Response:
        {
            "error": false,
            "message": "Login Successful",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IkZPc0tfRTdEcCIsImlhdCI6MTU5MDM0NjYxNTA2MiwiZXhwIjoxNTkwNDMzMDE1LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJJZCI6IlpmTWFyVVE4ayIsImZpcnN0TmFtZSI6IkFiaGlzaGVrIiwibGFzdE5hbWUiOiJBdiIsImNvdW50cnlOYW1lIjoidW5kZWZpbmVkIiwibW9iaWxlTnVtYmVyIjoiOTk0ODgzOTM2MiIsImVtYWlsIjoiYWJoaUBnbWFpbC5jb20iLCJ2YWxpZGF0aW9uVG9rZW4iOiIiLCJmcmllbmRzIjpbeyJmcmllbmRJZCI6IkFZeUFQTzlQbCIsImZyaWVuZE5hbWUiOiJIYXJpbmF0aCBIIiwiX2lkIjoiNWVjODhmZmRjYTc1NDUxMmU3MDI5NWMwIn1dLCJmcmllbmRSZXF1ZXN0UmVjaWV2ZWQiOltdLCJmcmllbmRSZXF1ZXN0U2VudCI6W119fQ.4I4Vp3EFlf7RugipC52MM23F8bCFPyc9CrAO7UfTkVA",
                "userDetails": {
                    "userId": "ZfMarUQ8k",
                    "firstName": "Abhishek",
                    "lastName": "Av",
                    "countryName": "undefined",
                    "mobileNumber": "9948839362",
                    "email": "abhi@gmail.com",
                    "validationToken": "",
                    "friends": [
                        {
                            "friendId": "AYyAPO9Pl",
                            "friendName": "Harinath H",
                            "_id": "5ec88ffdca754512e70295c0"
                        }
                    ],
                    "friendRequestRecieved": [],
                    "friendRequestSent": []
                }
            }
        }
    */

    app.post(`${baseUrl}/:userId/delete`, auth.isAuthorized, userController.deleteUser);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/:userId/delete delete User.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken authToken. (query params) (required)
     * 
     * @apiSuccessExample {json} Success-Response:
        {
            "error": false,
            "message": "Deleted the user successfully",
            "status": 200,
            "data": {
                "userId": "ZfMarUQ8k",
                "firstName": "Abhishek",
                "lastName": "Av",
                "countryName": "undefined",
                "mobileNumber": "9948839362",
                "password": "$2b$10$rQjf7sMC6dAkUg/UD06JZuWV5srO9l97wuBsrnDIve6dZoPaUNVCC",
                "email": "abhi@gmail.com",
                "validationToken": "",
                "createdOn": "2020-05-23T02:50:47.000Z",
                "_id": "5ec88f87ca754512e70295b9",
                "friends": [
                    {
                        "friendId": "AYyAPO9Pl",
                        "friendName": "Harinath H",
                        "_id": "5ec88ffdca754512e70295c0"
                    }
                ],
                "friendRequestRecieved": [],
                "friendRequestSent": [],
                "__v": 0
            }
        }
    */

    app.get(`${baseUrl}/view/all`, userController.getAllUser);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/view/all Get All Users.
     *
     * @apiSuccessExample {json} Success-Response:
        {
            "error": false,
            "message": "All User Details Found",
            "status": 200,
            "data": [
                {
                    "userId": "ZfMarUQ8k",
                    "firstName": "Abhishek",
                    "lastName": "Av",
                    "countryName": "undefined",
                    "mobileNumber": "9948839362",
                    "password": "$2b$10$rQjf7sMC6dAkUg/UD06JZuWV5srO9l97wuBsrnDIve6dZoPaUNVCC",
                    "email": "abhi@gmail.com",
                    "validationToken": "",
                    "createdOn": "2020-05-23T02:50:47.000Z",
                    "friends": [
                        {
                            "friendId": "AYyAPO9Pl",
                            "friendName": "Harinath H",
                            "_id": "5ec88ffdca754512e70295c0"
                        }
                    ],
                    "friendRequestRecieved": [],
                    "friendRequestSent": []
                },
                {
                    "userId": "AYyAPO9Pl",
                    "firstName": "Harinath",
                    "lastName": "H",
                    "countryName": "undefined",
                    "mobileNumber": "9999999999",
                    "password": "$2b$10$2nzZtLYf5az25b4GBw.LRule1PZjaLGguntX5YYyvt34lJxMCZzEC",
                    "email": "harinath@gmail.com",
                    "validationToken": "",
                    "createdOn": "2020-05-23T02:52:13.000Z",
                    "friends": [
                        {
                            "friendId": "ZfMarUQ8k",
                            "friendName": "Abhishek Av",
                            "_id": "5ec88ffdca754512e70295bf"
                        }
                    ],
                    "friendRequestRecieved": [],
                    "friendRequestSent": []
                }
            ]
        }
    */

    app.get(`${baseUrl}/:userId/details`, auth.isAuthorized, userController.getSingleUser);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/:userId/details Get Single User.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authtoken authToken. (query params) (required)
     * 
     * @apiSuccessExample {json} Success-Response:
        {
            "error": false,
            "message": "User Details Found",
            "status": 200,
            "data": {
                "userId": "ZfMarUQ8k",
                "firstName": "Abhishek",
                "lastName": "Av",
                "countryName": "undefined",
                "mobileNumber": "9948839362",
                "email": "abhi@gmail.com",
                "validationToken": "",
                "createdOn": "2020-05-23T02:50:47.000Z",
                "friends": [
                    {
                        "friendId": "AYyAPO9Pl",
                        "friendName": "Harinath H",
                        "_id": "5ec88ffdca754512e70295c0"
                    }
                ],
                "friendRequestRecieved": [],
                "friendRequestSent": []
            }
        }
    */

    app.post(`${baseUrl}/logout/:userId`, auth.isAuthorized, userController.logout)

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/logout/:userId Logout.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken authToken. (body params) (required)
     * 
     * @apiSuccessExample {json} Success-Response:
        {
            "error": false,
            "message": "User Details Found",
            "status": 200,
            "data": {
                "error": false,
                "message": "Logged out Successfully",
                "status": 200,
                "data": null
            }
        }
    */

}

module.exports = {
    setRouter: setRouter
}