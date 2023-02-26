const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type ListingResult {
  count: Int
  results: [PropertyResult]
}

type Region {
  name: String
  _id: ID
}

  type PropertyResult {
  list_price: Int
  property_id: String
  primary_photo: Photo
  location: Location
}

type Description {
  type: String
  beds: Int
  baths: Int
  sqft: Int
}

type Location {
  address: Address
}

type Address {
  city: String
  line: String
  state: String
}

type Photo {
  href: String
}

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    listing: ListingResult
    listings: ListingResult
    searchRegion(name: String!, sortName: Int): [Region]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
