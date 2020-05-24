const express = require('express');
const itemController = require('./../controllers/itemController');
const appConfig = require('./../config/appConfig')
const auth = require('./../middlewares/auth')

let setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/items`;
    
    app.post(`${baseUrl}/additem`, auth.isAuthorized, itemController.addItemFunction);

    /**
     * @apiGroup create
     * @apiVersion  1.0.0
     * @api {post} /api/v1/items/additem Add item.
     *
     * @apiParam {string} authToken authToken. (body/header/query params) (required)
     * @apiParam {string} listId Id of the List. (body params) (required)
     * @apiParam {string} itemName Name of the item. (body params) (required)
     * @apiParam {string} itemCreatorId User Id of the user. (body params) (required)
     * @apiParam {string} itemCreatorName User Name of the user. (body params) (required)
     * @apiParam {string} itemModifierId User Id of the user modifying todo. (body params) (required)
     * @apiParam {string} itemModifierName User Name of the user modifying todo. (body params) (required)
     *
     * @apiSuccessExample {json} Success-Response:
        {
            "error": false,
            "message": "Item Created",
            "status": 200,
            "data": {
                "__v": 0,
                "_id": "5ecaca839d040f1461ad0934",
                "subItems": [],
                "itemModifierName": "Abhishek Av",
                "itemModifierId": "AYyAPO9Pl",
                "itemModifiedOn": "2020-05-24T19:26:59.000Z",
                "itemCreatedOn": "2020-05-24T19:26:59.000Z",
                "itemCreatorName": "Abhishek Av",
                "itemCreatorId": "AYyAPO9Pl",
                "itemName": "Item 1",
                "itemId": "vwd3v43qm",
                "listId": "5vm2Hv83q"
            }
        }
    */

    app.put(`${baseUrl}/edititem/:itemId`, auth.isAuthorized, itemController.editItemFunction);
    
    app.post(`${baseUrl}/delete/:itemId`, auth.isAuthorized, itemController.deleteItemFunction);

    /**
     * @apiGroup delete
     * @apiVersion  1.0.0
     * @api {post} /api/v1/items/delete/:itemId Delete item.
     *
     * @apiParam {string} itemId Id of the item to be deleted. (query params) (required)
     * @apiParam {string} authToken authToken. (body/header/query params) (required)
     * 
     * @apiSuccessExample {json} Success-Response:
        {
            "error": false,
            "message": "Deleted the Item successfully",
            "status": 200,
            "data": null
        }
    */
    
    app.get(`${baseUrl}/view/all/:listId`, auth.isAuthorized, itemController.getAllItemsFunction);

    /**
     * @apiGroup Read
     * @apiVersion  1.0.0
     * @api {get} /api/v1/items/view/all/items/:listId Getting all items of User.
     *
     * @apiParam {string} listId listId of the user. (query params) (required)
     * @apiParam {string} authToken authToken. (body/header/query params) (required)
     * 
     * @apiSuccessExample {json} Success-Response:
        {
            "error": false,
            "message": "Items Found and Listed",
            "status": 200,
            "data": [
                {
                    "__v": 0,
                    "_id": "5ecaca839d040f1461ad0934",
                    "subItems": [],
                    "itemModifierName": "Abhishek Av",
                    "itemModifierId": "AYyAPO9Pl",
                    "itemModifiedOn": "2020-05-24T19:26:59.000Z",
                    "itemCreatedOn": "2020-05-24T19:26:59.000Z",
                    "itemCreatorName": "Abhishek Av",
                    "itemCreatorId": "AYyAPO9Pl",
                    "itemName": "Item 1",
                    "itemId": "vwd3v43qm",
                    "listId": "5vm2Hv83q"
                }
            ]
        }
    */
    
    app.get(`${baseUrl}/:itemId/details`, auth.isAuthorized, itemController.getItemDetailsFunction);
    
    app.put(`${baseUrl}/addSubItem/:itemId`, auth.isAuthorized, itemController.addSubItemFunction);

    /**
    * @apiGroup create
    * @apiVersion  1.0.0
    * @api {put} /api/v1/items/addSubItem/:itemId Add Sub Item.
    *
    * @apiParam {string} authToken authToken. (body/header/query params) (required)
    * @apiParam {string} itemId Id of the Item. (header params) (required)
    * @apiParam {string} subItemName Name of the Sub item. (body params) (required)
    * @apiParam {string} subItemCreatorId User Id of the user. (body params) (required)
    * @apiParam {string} subItemCreatorName User Name of the user. (body params) (required)
    * @apiParam {string} subItemModifierId User Id of the user modifying todo sub item. (body params) (required)
    * @apiParam {string} subItemModifierName User Name of the user modifying todo sub item. (body params) (required)
    *
    * @apiSuccessExample {json} Success-Response:
        {
            "error": false,
            "message": "Sub Item Added Successfully",
            "status": 200,
            "data": null
        }
   */
    
    app.put(`${baseUrl}/:itemId/updateSubItem`, auth.isAuthorized, itemController.editSubItemFunction);
    
    app.put(`${baseUrl}/deleteSubItem/:itemId`, auth.isAuthorized, itemController.deleteSubItemFunction);

    /**
     * @apiGroup delete
     * @apiVersion  1.0.0
     * @api {put} /api/v1/items/deleteSubItem/:itemId Delete Sub Item.
     *
     * @apiParam {string} authToken authToken. (body/header/query params) (required)
     * @apiParam {string} itemId Id of the Item. (header params) (required)
     * @apiParam {string} subItemId Id of the Sub Item. (body params) (required)
     *
     * @apiSuccessExample {json} Success-Response:
     {
         "error": false,
        "message": "Sub Item Deleted Successfully",
        "status": 200,
        "data": null
    }
    */
    
}

module.exports = {
    setRouter: setRouter
}
