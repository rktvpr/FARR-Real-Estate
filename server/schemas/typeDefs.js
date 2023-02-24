const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    
    username: String
    id: ID
    email: String
    password: String
    Listings: [Listings]!
  }

  type EstateLocation {
    id: ID
    Address: String
    Price: Integer
  }

  type Realtors {
   
  }

  type Region {
   
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    EstateLocation(Adress: String): [listings]
    Realtors(id: ID!): listings
    Region:
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
