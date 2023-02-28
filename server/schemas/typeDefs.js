const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    
    username: String
    id: ID
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
  description: Description
}

type Description {
  type: String
  beds: Int
  baths: Int
  lot_sqft: Int
  sqft: Int
}

type Location {
  address: Address
  description: Description
}

type Address {
  city: String
  line: String
  state: String
}

type HomePhoto {
  href: String!
}

type SearchHome {
  property_id: Int!
  listing_id: Int!
  photos: [HomePhoto!]!
}

type SearchHomeResult {
  results: [SearchHome!]!
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
    home_search(property_id: Int!): SearchHomeResult!
    searchRegion(name: String!, sortName: Int): [Region]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    login(username: String!, password: String!): Auth
    # addThought(thoughtText: String!): Thought
    # addComment(thoughtId: ID!, commentText: String!): Thought
    # removeThought(thoughtId: ID!): Thought
    # removeComment(thoughtId: ID!, commentId: ID!): Thought 

  }
`;

module.exports = typeDefs;
