var schema = {
  "type": "object",
  "properties": {
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
              "required": ["id", "title", "createdAt", "records"]
            }
          }
        },
        "required": ["id", "title", "createdAt", "tasks"]
      }
    }
  },
  "required": ["users", "projects"]
};

module.exports = schema;
