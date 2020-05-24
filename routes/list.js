const express = require('express')
const listController = require('./../controllers/listController')
const appConfig = require('./../config/appConfig')
const auth = require('./../middlewares/auth')

let setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/lists`;

    app.post(`${baseUrl}/addList`, auth.isAuthorized, listController.addListFunction);

    /**
     * @apiGroup create
     * @apiVersion  1.0.0
     * @api {post} /api/v1/lists/addList Add List.
     *
     * @apiParam {string} authToken authToken. (body/header/query params) (required)
     * @apiParam {string} listName Name of the List. (body params) (required)
     * @apiParam {string} listCreatorId User Id of the user creating todo. (body params) (required)
     * @apiParam {string} listCreatorName User Name of the user creating todo. (body params) (required)
     * @apiParam {string} listModifierId User Id of the user modifying todo. (body params) (required)
     * @apiParam {string} listModifierName User Name of the user modifying todo. (body params) (required)
     * @apiParam {string} listMode Mode of the Todo. (body params) (required)
     * 
     * @apiSuccessExample {json} Success-Response:
        { 
            "error": false,
            "message": "List Created Successfully",
            "status": 200,
            "data": {
                "listId": "5vm2Hv83q",
                "listName": "list 1",
                "listCreatorId": "AYyAPO9Pl",
                "listCreatorName": "abhi",
                "listModifierId": "AYyAPO9Pl",
                "listModifierName": "abhi",
                "listMode": "public",
                "listCreatedOn": "2020-05-24T19:26:59.000Z",
                "listModifiedOn": "2020-05-24T19:26:59.000Z",
                "_id": "5ecaca839d040f1461ad0934",
                "__v": 0
            }
        }    
    */

    app.put(`${baseUrl}/:listId/updateList`, auth.isAuthorized, listController.editListFunction);

    /**
     * @apiGroup edit
     * @apiVersion  1.0.0
     * @api {put} /api/v1/lists/:listId/updateList Update List.
     *
     * @apiParam {string} authToken authToken. (body/header/query params) (required)
     * @apiParam {string} listId Id of the List. (query params) (required)
     * @apiParam {string} listName Name of the List. (body params) (required)
     * @apiParam {string} listModifierId User Id of the user modifying todo. (body params) (required)
     * @apiParam {string} listModifierName User Name of the user modifying todo. (body params) (required)
     * @apiParam {string} listMode Mode of the Todo. (body params) (required)
     *
     * @apiSuccessExample {json} Success-Response:
        {
            "error": false,
            "message": "List details Updated",
            "status": 200,
            "data": null
        }    
    */

    app.post(`${baseUrl}/delete/:listId`, auth.isAuthorized, listController.deleteListFunction);

    /**
     * @apiGroup delete
     * @apiVersion  1.0.0
     * @api {post} /api/v1/lists/delete/:listId Delete List.
     *
     * @apiParam {string} ListId ListId of the List to be deleted. (query params) (required)
     * @apiParam {string} authToken authToken. (body/header/query params) (required)
     * 
     * @apiSuccessExample {json} Success-Response:
        {
            "error": false,
            "message": "Deleted the List successfully",
            "status": 200,
            "data": null
        }
    */
    
    app.get(`${baseUrl}/view/all/:userId`, auth.isAuthorized, listController.getAllPrivateListsFunction);

    /**
     * @apiGroup Read
     * @apiVersion  1.0.0
     * @api {get} /api/v1/lists/view/all/:userId Getting all Lists of User.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken authToken. (body/header/query params) (required)
     * 
     * @apiSuccessExample {json} Success-Response:
        {
            "error": false,
            "message": "Lists Found and Listed",
            "status": 200,
            "data": [
                {
                    "listId": "5vm2Hv83q",
                    "listName": "list 1",
                    "listCreatorId": "AYyAPO9Pl",
                    "listCreatorName": "abhi",
                    "listModifierId": "AYyAPO9Pl",
                    "listModifierName": "abhi",
                    "listMode": "public",
                    "listCreatedOn": "2020-05-24T19:26:59.000Z",
                    "listModifiedOn": "2020-05-24T19:26:59.000Z",
                    "_id": "5ecaca839d040f1461ad0934",
                    "__v": 0
                }
            ]
        }
    */
    
    app.post(`${baseUrl}/view/all/public/lists`, auth.isAuthorized, listController.getAllPublicListsFunction);

    /**
    * @apiGroup Read
    * @apiVersion  1.0.0
    * @api {post} /api/v1/lists/view/all/public/lists Getting all public Lists of User.
    *
    * @apiParam {string} userIds userId of the users. (Body params) (required)
    * @apiParam {string} authToken authToken. (body/header/query params) (required)
    * 
    * @apiSuccessExample {json} Success-Response:
        {
            "error": false,
            "message": "All public Lists Found",
            "status": 200,
            "data": [
                {
                    "listId": "5vm2Hv83q",
                    "listName": "public list 1",
                    "listCreatorId": "AYyAPO9Pl",
                    "listCreatorName": "abhi",
                    "listModifierId": "AYyAPO9Pl",
                    "listModifierName": "abhi",
                    "listMode": "public",
                    "listCreatedOn": "2020-05-24T19:26:59.000Z",
                    "listModifiedOn": "2020-05-24T19:26:59.000Z",
                    "_id": "5ecaca839d040f1461ad0934",
                    "__v": 0
                }
            ]
        }
   */
    

}

module.exports = {
    setRouter: setRouter
}