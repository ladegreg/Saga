const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    _id: ID!
    nick: String!
    email: String!
    password: String!
    createdAt: String!
    updateAt: String!
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  input UserInput {
    nick: String!
    email: String!
    password: String!
  }

  type RootQuery {
    login(nick: String, email: String, password: String!): AuthData!
  }

  type RootMutation {
    createUser(userInput: UserInput): User
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
