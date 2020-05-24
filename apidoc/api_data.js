define({ "api": [
  {
    "group": "Read",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/items/view/all/items/:listId",
    "title": "Getting all items of User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>listId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Items Found and Listed\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"__v\": 0,\n            \"_id\": \"5ecaca839d040f1461ad0934\",\n            \"subItems\": [],\n            \"itemModifierName\": \"Abhishek Av\",\n            \"itemModifierId\": \"AYyAPO9Pl\",\n            \"itemModifiedOn\": \"2020-05-24T19:26:59.000Z\",\n            \"itemCreatedOn\": \"2020-05-24T19:26:59.000Z\",\n            \"itemCreatorName\": \"Abhishek Av\",\n            \"itemCreatorId\": \"AYyAPO9Pl\",\n            \"itemName\": \"Item 1\",\n            \"itemId\": \"vwd3v43qm\",\n            \"listId\": \"5vm2Hv83q\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/item.js",
    "groupTitle": "Read",
    "name": "GetApiV1ItemsViewAllItemsListid"
  },
  {
    "group": "Read",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/lists/view/all/:userId",
    "title": "Getting all Lists of User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Lists Found and Listed\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"listId\": \"5vm2Hv83q\",\n            \"listName\": \"list 1\",\n            \"listCreatorId\": \"AYyAPO9Pl\",\n            \"listCreatorName\": \"abhi\",\n            \"listModifierId\": \"AYyAPO9Pl\",\n            \"listModifierName\": \"abhi\",\n            \"listMode\": \"public\",\n            \"listCreatedOn\": \"2020-05-24T19:26:59.000Z\",\n            \"listModifiedOn\": \"2020-05-24T19:26:59.000Z\",\n            \"_id\": \"5ecaca839d040f1461ad0934\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/list.js",
    "groupTitle": "Read",
    "name": "GetApiV1ListsViewAllUserid"
  },
  {
    "group": "Read",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/view/all/public/lists",
    "title": "Getting all public Lists of User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userIds",
            "description": "<p>userId of the users. (Body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All public Lists Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"listId\": \"5vm2Hv83q\",\n            \"listName\": \"public list 1\",\n            \"listCreatorId\": \"AYyAPO9Pl\",\n            \"listCreatorName\": \"abhi\",\n            \"listModifierId\": \"AYyAPO9Pl\",\n            \"listModifierName\": \"abhi\",\n            \"listMode\": \"public\",\n            \"listCreatedOn\": \"2020-05-24T19:26:59.000Z\",\n            \"listModifiedOn\": \"2020-05-24T19:26:59.000Z\",\n            \"_id\": \"5ecaca839d040f1461ad0934\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/list.js",
    "groupTitle": "Read",
    "name": "PostApiV1ListsViewAllPublicLists"
  },
  {
    "group": "create",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/items/additem",
    "title": "Add item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>Id of the List. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemName",
            "description": "<p>Name of the item. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemCreatorId",
            "description": "<p>User Id of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemCreatorName",
            "description": "<p>User Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemModifierId",
            "description": "<p>User Id of the user modifying todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemModifierName",
            "description": "<p>User Name of the user modifying todo. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Item Created\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5ecaca839d040f1461ad0934\",\n        \"subItems\": [],\n        \"itemModifierName\": \"Abhishek Av\",\n        \"itemModifierId\": \"AYyAPO9Pl\",\n        \"itemModifiedOn\": \"2020-05-24T19:26:59.000Z\",\n        \"itemCreatedOn\": \"2020-05-24T19:26:59.000Z\",\n        \"itemCreatorName\": \"Abhishek Av\",\n        \"itemCreatorId\": \"AYyAPO9Pl\",\n        \"itemName\": \"Item 1\",\n        \"itemId\": \"vwd3v43qm\",\n        \"listId\": \"5vm2Hv83q\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/item.js",
    "groupTitle": "create",
    "name": "PostApiV1ItemsAdditem"
  },
  {
    "group": "create",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/addList",
    "title": "Add List.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listName",
            "description": "<p>Name of the List. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listCreatorId",
            "description": "<p>User Id of the user creating todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listCreatorName",
            "description": "<p>User Name of the user creating todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listModifierId",
            "description": "<p>User Id of the user modifying todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listModifierName",
            "description": "<p>User Name of the user modifying todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listMode",
            "description": "<p>Mode of the Todo. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n    \"error\": false,\n    \"message\": \"List Created Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"listId\": \"5vm2Hv83q\",\n        \"listName\": \"list 1\",\n        \"listCreatorId\": \"AYyAPO9Pl\",\n        \"listCreatorName\": \"abhi\",\n        \"listModifierId\": \"AYyAPO9Pl\",\n        \"listModifierName\": \"abhi\",\n        \"listMode\": \"public\",\n        \"listCreatedOn\": \"2020-05-24T19:26:59.000Z\",\n        \"listModifiedOn\": \"2020-05-24T19:26:59.000Z\",\n        \"_id\": \"5ecaca839d040f1461ad0934\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/list.js",
    "groupTitle": "create",
    "name": "PostApiV1ListsAddlist"
  },
  {
    "group": "create",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/items/addSubItem/:itemId",
    "title": "Add Sub Item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>Id of the Item. (header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subItemName",
            "description": "<p>Name of the Sub item. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subItemCreatorId",
            "description": "<p>User Id of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subItemCreatorName",
            "description": "<p>User Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subItemModifierId",
            "description": "<p>User Id of the user modifying todo sub item. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subItemModifierName",
            "description": "<p>User Name of the user modifying todo sub item. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Sub Item Added Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/item.js",
    "groupTitle": "create",
    "name": "PutApiV1ItemsAddsubitemItemid"
  },
  {
    "group": "delete",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/items/delete/:itemId",
    "title": "Delete item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>Id of the item to be deleted. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the Item successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/item.js",
    "groupTitle": "delete",
    "name": "PostApiV1ItemsDeleteItemid"
  },
  {
    "group": "delete",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/delete/:listId",
    "title": "Delete List.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ListId",
            "description": "<p>ListId of the List to be deleted. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the List successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/list.js",
    "groupTitle": "delete",
    "name": "PostApiV1ListsDeleteListid"
  },
  {
    "group": "delete",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/items/deleteSubItem/:itemId",
    "title": "Delete Sub Item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>Id of the Item. (header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subItemId",
            "description": "<p>Id of the Sub Item. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     \"error\": false,\n    \"message\": \"Sub Item Deleted Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/item.js",
    "groupTitle": "delete",
    "name": "PutApiV1ItemsDeletesubitemItemid"
  },
  {
    "group": "edit",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/lists/:listId/updateList",
    "title": "Update List.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>Id of the List. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listName",
            "description": "<p>Name of the List. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listModifierId",
            "description": "<p>User Id of the user modifying todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listModifierName",
            "description": "<p>User Name of the user modifying todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listMode",
            "description": "<p>Mode of the Todo. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"List details Updated\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/list.js",
    "groupTitle": "edit",
    "name": "PutApiV1ListsListidUpdatelist"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/friends/view/friend/request/recieved/:userId",
    "title": "Getting all request Recieved.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserId",
            "description": "<p>userId of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All Recieved Requsts Found Suucessfully\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5ecaca839d040f1461ad0934\",\n            \"friendRequestRecieved\": [\n                {\n                    \"friendId\": \"AYyAPO9Pl\",\n                    \"friendName\": \"Kranthi k\",\n                    \"_id\": \"5bcad09db223e91708c6f19d\"\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/friend.js",
    "groupTitle": "friends",
    "name": "GetApiV1FriendsViewFriendRequestRecievedUserid"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/friends/view/friend/request/sent/:userId",
    "title": "Getting all request sent.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All Sent Requsts Found Suucessfully\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5ecaca839d040f1461ad0934\",\n            \"friendRequestSent\": [\n                {\n                    \"friendId\": \"AYyAPO9Pl\",\n                    \"friendName\": \"harinath h\",\n                    \"_id\": \"5bcad09db223e91708c6f19d\"\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/friend.js",
    "groupTitle": "friends",
    "name": "GetApiV1FriendsViewFriendRequestSentUserid"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/friends/accept/friend/request",
    "title": "Accept Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverId",
            "description": "<p>userId of the Reciever. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverName",
            "description": "<p>Name of the Reciever. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Accepted Friend Request Suucessfull\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/friend.js",
    "groupTitle": "friends",
    "name": "PostApiV1FriendsAcceptFriendRequest"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/friends/cancel/friend/request",
    "title": "Cancel Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverId",
            "description": "<p>userId of the Reciever. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverName",
            "description": "<p>Name of the Reciever. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     \"error\": false,\n    \"message\": \"Canceled Friend Request Suucessfull\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/friend.js",
    "groupTitle": "friends",
    "name": "PostApiV1FriendsCancelFriendRequest"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/friends/reject/friend/request",
    "title": "Reject Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverId",
            "description": "<p>userId of the Reciever. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverName",
            "description": "<p>Name of the Reciever. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     \"error\": false,\n    \"message\": \"Rejected Friend Request Suucessfull\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/friend.js",
    "groupTitle": "friends",
    "name": "PostApiV1FriendsRejectFriendRequest"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/friends/send/friend/request",
    "title": "Send Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverId",
            "description": "<p>userId of the Reciever. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverName",
            "description": "<p>Name of the Reciever. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Friend Request Sent Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/friend.js",
    "groupTitle": "friends",
    "name": "PostApiV1FriendsSendFriendRequest"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/:userId/details",
    "title": "Get Single User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authtoken",
            "description": "<p>authToken. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"ZfMarUQ8k\",\n        \"firstName\": \"Abhishek\",\n        \"lastName\": \"Av\",\n        \"countryName\": \"undefined\",\n        \"mobileNumber\": \"9948839362\",\n        \"email\": \"abhi@gmail.com\",\n        \"validationToken\": \"\",\n        \"createdOn\": \"2020-05-23T02:50:47.000Z\",\n        \"friends\": [\n            {\n                \"friendId\": \"AYyAPO9Pl\",\n                \"friendName\": \"Harinath H\",\n                \"_id\": \"5ec88ffdca754512e70295c0\"\n            }\n        ],\n        \"friendRequestRecieved\": [],\n        \"friendRequestSent\": []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersUseridDetails"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "Get All Users.",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"ZfMarUQ8k\",\n            \"firstName\": \"Abhishek\",\n            \"lastName\": \"Av\",\n            \"countryName\": \"undefined\",\n            \"mobileNumber\": \"9948839362\",\n            \"password\": \"$2b$10$rQjf7sMC6dAkUg/UD06JZuWV5srO9l97wuBsrnDIve6dZoPaUNVCC\",\n            \"email\": \"abhi@gmail.com\",\n            \"validationToken\": \"\",\n            \"createdOn\": \"2020-05-23T02:50:47.000Z\",\n            \"friends\": [\n                {\n                    \"friendId\": \"AYyAPO9Pl\",\n                    \"friendName\": \"Harinath H\",\n                    \"_id\": \"5ec88ffdca754512e70295c0\"\n                }\n            ],\n            \"friendRequestRecieved\": [],\n            \"friendRequestSent\": []\n        },\n        {\n            \"userId\": \"AYyAPO9Pl\",\n            \"firstName\": \"Harinath\",\n            \"lastName\": \"H\",\n            \"countryName\": \"undefined\",\n            \"mobileNumber\": \"9999999999\",\n            \"password\": \"$2b$10$2nzZtLYf5az25b4GBw.LRule1PZjaLGguntX5YYyvt34lJxMCZzEC\",\n            \"email\": \"harinath@gmail.com\",\n            \"validationToken\": \"\",\n            \"createdOn\": \"2020-05-23T02:52:13.000Z\",\n            \"friends\": [\n                {\n                    \"friendId\": \"ZfMarUQ8k\",\n                    \"friendName\": \"Abhishek Av\",\n                    \"_id\": \"5ec88ffdca754512e70295bf\"\n                }\n            ],\n            \"friendRequestRecieved\": [],\n            \"friendRequestSent\": []\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersViewAll"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "Login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IkZPc0tfRTdEcCIsImlhdCI6MTU5MDM0NjYxNTA2MiwiZXhwIjoxNTkwNDMzMDE1LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJJZCI6IlpmTWFyVVE4ayIsImZpcnN0TmFtZSI6IkFiaGlzaGVrIiwibGFzdE5hbWUiOiJBdiIsImNvdW50cnlOYW1lIjoidW5kZWZpbmVkIiwibW9iaWxlTnVtYmVyIjoiOTk0ODgzOTM2MiIsImVtYWlsIjoiYWJoaUBnbWFpbC5jb20iLCJ2YWxpZGF0aW9uVG9rZW4iOiIiLCJmcmllbmRzIjpbeyJmcmllbmRJZCI6IkFZeUFQTzlQbCIsImZyaWVuZE5hbWUiOiJIYXJpbmF0aCBIIiwiX2lkIjoiNWVjODhmZmRjYTc1NDUxMmU3MDI5NWMwIn1dLCJmcmllbmRSZXF1ZXN0UmVjaWV2ZWQiOltdLCJmcmllbmRSZXF1ZXN0U2VudCI6W119fQ.4I4Vp3EFlf7RugipC52MM23F8bCFPyc9CrAO7UfTkVA\",\n        \"userDetails\": {\n            \"userId\": \"ZfMarUQ8k\",\n            \"firstName\": \"Abhishek\",\n            \"lastName\": \"Av\",\n            \"countryName\": \"undefined\",\n            \"mobileNumber\": \"9948839362\",\n            \"email\": \"abhi@gmail.com\",\n            \"validationToken\": \"\",\n            \"friends\": [\n                {\n                    \"friendId\": \"AYyAPO9Pl\",\n                    \"friendName\": \"Harinath H\",\n                    \"_id\": \"5ec88ffdca754512e70295c0\"\n                }\n            ],\n            \"friendRequestRecieved\": [],\n            \"friendRequestSent\": []\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout/:userId",
    "title": "Logout.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"error\": false,\n        \"message\": \"Logged out Successfully\",\n        \"status\": 200,\n        \"data\": null\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogoutUserid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "SignUp",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>FirstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>LastName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryName",
            "description": "<p>country Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile Number of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"User Created\",\n\"status\": 200,\n\"data\": [\n    {\n        \"createdOn\": \"2020-05-24T13:42:58.000Z\",\n        \"validationToken\": \"Null\",\n        \"email\": \"abhi@gmail.com\",\n        \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa\",\n        \"mobileNumber\": \"9948839362\",\n        \"countryName\": \"India\",\n        \"lastName\": \"Abhishek\",\n        \"firstName\": \"Av\",\n        \"userId\": \"B1cyuc8OX\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/:userId/delete",
    "title": "delete User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the user successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"ZfMarUQ8k\",\n        \"firstName\": \"Abhishek\",\n        \"lastName\": \"Av\",\n        \"countryName\": \"undefined\",\n        \"mobileNumber\": \"9948839362\",\n        \"password\": \"$2b$10$rQjf7sMC6dAkUg/UD06JZuWV5srO9l97wuBsrnDIve6dZoPaUNVCC\",\n        \"email\": \"abhi@gmail.com\",\n        \"validationToken\": \"\",\n        \"createdOn\": \"2020-05-23T02:50:47.000Z\",\n        \"_id\": \"5ec88f87ca754512e70295b9\",\n        \"friends\": [\n            {\n                \"friendId\": \"AYyAPO9Pl\",\n                \"friendName\": \"Harinath H\",\n                \"_id\": \"5ec88ffdca754512e70295c0\"\n            }\n        ],\n        \"friendRequestRecieved\": [],\n        \"friendRequestSent\": [],\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUseridDelete"
  }
] });
