const express = require('express');
const friendController = require('./../controllers/friendsController');
const appConfig = require('./../config/appConfig')
const auth = require('./../middlewares/auth')

let setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/friends`;
    
    app.get(`${baseUrl}/view/friend/request/sent/:userId`, auth.isAuthorized, friendController.getAllRequestSent);

    /**
     * @apiGroup friends
     * @apiVersion  1.0.0
     * @api {get} /api/v1/friends/view/friend/request/sent/:userId Getting all request sent.
     *
     * @apiParam {string} authToken authToken. (query/body/header params) (required)
     * @apiParam {string} userId userId of the user. (header params) (required)
     * 
     * @apiSuccessExample {json} Success-Response:
        {
            "error": false,
            "message": "All Sent Requsts Found Suucessfully",
            "status": 200,
            "data": [
                {
                    "_id": "5ecaca839d040f1461ad0934",
                    "friendRequestSent": [
                        {
                            "friendId": "AYyAPO9Pl",
                            "friendName": "harinath h",
                            "_id": "5bcad09db223e91708c6f19d"
                        }
                    ]
                }
            ]
        }
    */
    
    app.get(`${baseUrl}/view/friend/request/recieved/:userId`, auth.isAuthorized, friendController.getAllRequestRecieved);

    /**
    * @apiGroup friends
    * @apiVersion  1.0.0
    * @api {get} /api/v1/friends/view/friend/request/recieved/:userId Getting all request Recieved.
    *
    * @apiParam {string} authToken authToken. (query/body/header params) (required)
    * @apiParam {string} UserId userId of the user. (header params) (required)
    * 
    * @apiSuccessExample {json} Success-Response:
    {
        "error": false,
        "message": "All Recieved Requsts Found Suucessfully",
        "status": 200,
        "data": [
            {
                "_id": "5ecaca839d040f1461ad0934",
                "friendRequestRecieved": [
                    {
                        "friendId": "AYyAPO9Pl",
                        "friendName": "Kranthi k",
                        "_id": "5bcad09db223e91708c6f19d"
                    }
                ]
            }
        ]
    }
   */
    
    app.post(`${baseUrl}/send/friend/request`, auth.isAuthorized,friendController.sendFriendRequest);

    /**
     * @apiGroup friends
     * @apiVersion  1.0.0
     * @api {post} /api/v1/friends/send/friend/request Send Friend Request.
     *
     * @apiParam {string} authToken authToken. (query/body/header params) (required)
     * @apiParam {string} senderId userId of the Sender. (body params) (required)
     * @apiParam {string} senderName Name of the Sender. (body params) (required)
     * @apiParam {string} recieverId userId of the Reciever. (body params) (required)
     * @apiParam {string} recieverName Name of the Reciever. (body params) (required)
     * 
     * @apiSuccessExample {json} Success-Response:
        {
            "error": false,
            "message": "Friend Request Sent Successfully",
            "status": 200,
            "data": null
        }
    */
    
    app.post(`${baseUrl}/accept/friend/request`, auth.isAuthorized,friendController.acceptFriendRequest);


    /**
    * @apiGroup friends
    * @apiVersion  1.0.0
    * @api {post} /api/v1/friends/accept/friend/request Accept Friend Request.
    *
    * @apiParam {string} authToken authToken. (query/body/header params) (required)
    * @apiParam {string} senderId userId of the Sender. (body params) (required)
    * @apiParam {string} senderName Name of the Sender. (body params) (required)
    * @apiParam {string} recieverId userId of the Reciever. (body params) (required)
    * @apiParam {string} recieverName Name of the Reciever. (body params) (required)
    * 
    * @apiSuccessExample {json} Success-Response:
       {
           "error": false,
           "message": "Accepted Friend Request Suucessfull",
           "status": 200,
           "data": null
       }
   */
    
    app.post(`${baseUrl}/reject/friend/request`, auth.isAuthorized,friendController.rejectFriendRequest);

    /**
     * @apiGroup friends
     * @apiVersion  1.0.0
     * @api {post} /api/v1/friends/reject/friend/request Reject Friend Request.
     *
     * @apiParam {string} authToken authToken. (query/body/header params) (required)
     * @apiParam {string} senderId userId of the Sender. (body params) (required)
     * @apiParam {string} senderName Name of the Sender. (body params) (required)
     * @apiParam {string} recieverId userId of the Reciever. (body params) (required)
     * @apiParam {string} recieverName Name of the Reciever. (body params) (required)
     * 
     * @apiSuccessExample {json} Success-Response:
         {
             "error": false,
            "message": "Rejected Friend Request Suucessfull",
            "status": 200,
            "data": null
        }
    */
    
    app.post(`${baseUrl}/cancel/friend/request`, auth.isAuthorized,friendController.cancelFriendRequest);


    /**
     * @apiGroup friends
     * @apiVersion  1.0.0
     * @api {post} /api/v1/friends/cancel/friend/request Cancel Friend Request.
     *
     * @apiParam {string} authToken authToken. (query/body/header params) (required)
     * @apiParam {string} senderId userId of the Sender. (body params) (required)
     * @apiParam {string} senderName Name of the Sender. (body params) (required)
     * @apiParam {string} recieverId userId of the Reciever. (body params) (required)
     * @apiParam {string} recieverName Name of the Reciever. (body params) (required)
     * 
     * @apiSuccessExample {json} Success-Response:
         {
             "error": false,
            "message": "Canceled Friend Request Suucessfull",
            "status": 200,
            "data": null
        }
    */
    

}


module.exports = {
    setRouter: setRouter
}