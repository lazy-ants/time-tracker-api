var schema = {
  "definitions": {
    "users": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          }
        },
        "required": ["id", "firstName", "lastName", "email"]
      }
    },
    "records": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "createdAt": {
            "type": "string",
            "faker": "date.recent"
          },
          "finishedAt": {
            "type": "string",
            "faker": "date.future"
          }
        },
        "required": ["id", "createdAt", "finishedAt"]
      }
    },
    "user": {
      "type": "object",
      "properties": {
        "id": {
          "type": "number",
          "unique": true,
          "minimum": 1
        },
        "firstName": {
          "type": "string",
          "faker": "name.firstName"
        },
        "lastName": {
          "type": "string",
          "faker": "name.lastName"
        },
        "email": {
          "type": "string",
          "faker": "internet.email"
        }
      },
      "required": ["id", "firstName", "lastName", "email"]
    },
    "tasks": {
      "type": "array",
      "minItems": 5,
      "maxItems": 10,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "title": {
            "type": "string",
            "faker": "hacker.phrase"
          },
          "user": { "$ref": "#/definitions/user" },
          "createdAt": {
            "type": "string",
            "faker": "date.recent"
          },
          "records": { "$ref": "#/definitions/records" }
        },
        "required": ["id", "title", "user", "createdAt", "records"]
      }
    }
  },
  "type": "object",

  "properties": {
    "users": { "$ref": "#/definitions/users" },
    "projects": {
      "type": "array",
      "minItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "users": { "$ref": "#/definitions/users" },
          "title": {
            "type": "string",
            "faker": "internet.domainName"
          },
          "createdAt": {
            "type": "string",
            "faker": "date.recent"
          },
          "tasks": { "$ref": "#/definitions/tasks" }
        },
        "required": ["id", "users", "title", "tasks", "createdAt"]
      }
    },
    "tasks": { "$ref": "#/definitions/tasks" },
    "records": { "$ref": "#/definitions/records" }
  },
  "required": ["project"]
};

module.exports = schema;
