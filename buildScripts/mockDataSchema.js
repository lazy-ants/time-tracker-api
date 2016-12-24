var schema = {
  "definitions": {
    "users": {
      "type": "object",
      "properties": {
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
      }
    }
  },
  "type": "object",

  "properties": {
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
                "createdAt": {
                  "type": "string",
                  "faker": "date.recent"
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
                }
              },
              "required": ["id", "title", "user", "createdAt", "records"]
            }
          }
        },
        "required": ["id", "users", "title", "tasks", "createdAt"]
      }
    }
  },
  "required": ["project"]
};

module.exports = schema;
